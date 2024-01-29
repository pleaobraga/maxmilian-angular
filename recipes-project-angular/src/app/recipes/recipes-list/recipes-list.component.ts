import { Component, EventEmitter, Output } from '@angular/core'

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss',
})
export class RecipesListComponent {
  @Output() wasSelectedRecipe = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
    ),
    new Recipe(
      'A Test 2 Recipe',
      'test 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
    ),
  ]

  onSelectedRecipe(selectedRecipe: Recipe) {
    this.wasSelectedRecipe.emit(selectedRecipe)
  }

  ngOnInit() {
    this.wasSelectedRecipe.emit(this.recipes[0])
  }
}
