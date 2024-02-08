import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExchangeService } from 'src/app/services/exchange/exchange.service';
import {
  FoodService,
  generateRandomId,
} from 'src/app/services/food/food.service';
import {
  FoodItem,
  FoodCategoryOptions,
  FoodOption,
  FoodCategoryKey,
  FoodCategory,
} from 'src/app/services/food/utils';

type Fields = {
  drinkCategory: FoodOption[];
  popCornCategory: FoodOption;
  baguiBreadCategory: FoodOption;
  baguiCheeseCategory: FoodOption;
  hotDogCategory: FoodOption;
  toppingCategory: FoodOption[];
  nachosCategory: FoodOption;
  nachosCheeseCategory: FoodOption;
  dressingCategory: FoodOption;
  frappeMilkCategory: FoodOption;
  frappeCategory: FoodOption;
  crepaCategory: FoodOption[];
  tequesitosCategory: FoodOption;
};

const emptyOption: FoodOption = {
  option: '',
  price: 0,
};

@Component({
  selector: 'app-food-modal',
  templateUrl: './food-modal.component.html',
  styleUrls: ['./food-modal.component.scss'],
})
export class FoodModalComponent {
  @Input() selectedItem: FoodItem | undefined;
  @Output() closeEvent = new EventEmitter();
  itemQuantity: number = 1;
  fields: Fields = {
    drinkCategory: [],
    popCornCategory: emptyOption,
    baguiBreadCategory: emptyOption,
    baguiCheeseCategory: emptyOption,
    hotDogCategory: emptyOption,
    toppingCategory: [],
    nachosCategory: emptyOption,
    nachosCheeseCategory: emptyOption,
    dressingCategory: emptyOption,
    frappeMilkCategory: emptyOption,
    frappeCategory: emptyOption,
    crepaCategory: [],
    tequesitosCategory: emptyOption,
  };

  constructor(
    private foodService: FoodService,
    private exchangeService: ExchangeService
  ) {}

  get currencyType() {
    return this.exchangeService.currencyType;
  }

  get foodsCategories() {
    return this.foodService.foodsCategories;
  }

  get total() {
    const fieldsTotal = Object.values(this.fields).reduce((acc, fieldValue) => {
      const isArray = Array.isArray(fieldValue);
      let total = 0;
      if (isArray) {
        fieldValue.forEach((value) => {
          total = total + value.price;
        });
      } else if (fieldValue.price) {
        total = total + fieldValue.price;
      }

      return acc + total;
    }, 0);

    return this.selectedItem ? this.selectedItem.price + fieldsTotal : 0;
  }

  get totalTimesQuantity() {
    return this.total * this.itemQuantity;
  }

  getCorrectVal(val: number | undefined) {
    if (val !== undefined) {
      return this.exchangeService.getCorrectValue(val);
    }

    return 0;
  }

  changeRadio(field: FoodCategoryKey, selectedOption: FoodOption) {
    let fieldToChange = this.fields[field];
    if (!Array.isArray(fieldToChange)) {
      (this.fields[field] as FoodOption) = { ...selectedOption };
    }
  }

  changeCheckbox(field: FoodCategoryKey, selectedOption: FoodOption) {
    let fieldToChange = this.fields[field];
    if (Array.isArray(fieldToChange)) {
      const alreadyExists = fieldToChange.find(
        (item) => item.option === selectedOption.option
      );
      if (!alreadyExists) {
        (this.fields[field] as FoodOption[]).push({ ...selectedOption });
      } else {
        (this.fields[field] as FoodOption[]) = fieldToChange =
          fieldToChange.filter((item) => item.option !== selectedOption.option);
      }
    }
  }

  shouldDisableCheckbox(section: FoodCategory, selectedOption: FoodOption) {
    const ranOut =
      (this.fields[section.id] as FoodOption[]).length === section.quantity;
    const sectionIsAdded = (this.fields[section.id] as FoodOption[]).find(
      (option) => option.option === selectedOption.option
    );

    return ranOut && !sectionIsAdded;
  }

  shouldDisableAddToCart() {
    let shouldEnable = false;
    if (this.selectedItem) {
      const activeCategories = this.selectedItem.categories;
      shouldEnable = Object.keys(activeCategories).reduce((acc, key) => {
        if (acc === false) {
          return acc;
        }
        const foodSectionKey = key as FoodCategoryKey;
        const field = this.fields[foodSectionKey];

        const category = this.foodsCategories.find(
          (cat) => cat.id === foodSectionKey
        );

        if (category?.required === false) {
          return true;
        }

        if (Array.isArray(field)) {
          const maxLength = field.length === category?.quantity;
          return maxLength;
        } else {
          const filled = !!field.option;
          return filled;
        }
      }, true);
    }

    return !shouldEnable;
  }

  addToCart() {
    if (this.selectedItem) {
      const item = {
        id: generateRandomId(),
        name: this.selectedItem.name,
        description: this.selectedItem.description,
        image: this.selectedItem.image,
        quantity: this.itemQuantity,
        price: this.total,
        totalPrice: this.totalTimesQuantity,
      };

      this.foodService.addItemToCart(item);
      this.closeEvent.emit();
    }
  }

  increaseQuantity() {
    this.itemQuantity++;
  }

  decreaseQuantity() {
    if (this.itemQuantity !== 0) {
      this.itemQuantity--;
    }
  }

  isFoodOptionEnabled(option: string) {
    const optionKey = option as keyof FoodCategoryOptions;
    return this.selectedItem?.categories[optionKey];
  }

  closeModal(event: MouseEvent) {
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      (target.id === 'modal-area' || target.id === 'close-button')
    ) {
      this.closeEvent.emit();
    }
  }
}
