import * as model from './demoModel.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './demoView.js';

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        recipeView.renderSpinner();
        await model.loadRecipe(id);

        recipeView.render(model.state.recipe)

    } catch (err) { console.log(err) }
};

['hashchange', 'load'].forEach(el =>
    window.addEventListener(el, controlRecipes))