import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrl: './recipes-list-item.component.scss',
})
export class RecipesListItemComponent {
  @Input() recipe: Recipe
  @Output() selectedRecipe = new EventEmitter<void>()

  onSelected() {
    this.selectedRecipe.emit()
  }
}
