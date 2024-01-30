import { Component, Input } from '@angular/core'
import { Recipe } from '../../recipe.model'
import { RecipeService } from '../../recipe.service'

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrl: './recipes-list-item.component.scss',
})
export class RecipesListItemComponent {
  @Input() recipe: Recipe

  constructor(private recipeService: RecipeService) {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
