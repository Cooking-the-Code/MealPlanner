const Recipe = require("../api/src/Recipe.model");
const expect = require("chai").expect;

describe("add a recipe", () => {
  it("should have name, ingredients,by,description,category,instruction, prepTime, cookTime, servingSize,imageUrl", (done) => {
    let by = "name";
    let description = "hi";
    let ingredients = ["egg"];
    const recipe = new Recipe({
      name: "chicken salad",
      ingredients,
      by,
      description,
      category: "lunch",
      instruction: "cook",
      prepTime: "30m",
      cookTime: "1hr",
      servingSize: 4,
      imageUrl: "something",
    });
    recipe.save(done);
    expect(recipe.name).to.equal("chicken salad");
    expect(recipe.by).to.equal(by);
    expect(recipe.description).to.equal(description);
    expect(recipe.ingredients.length).to.be.greaterThan(0);
    expect(recipe.category).to.equal("lunch");
    expect(recipe.instruction).to.equal("cook");
    expect(recipe.prepTime).to.equal("30m");
    expect(recipe.cookTime).to.equal("1hr");
    expect(recipe.servingSize).to.equal(4);
    expect(recipe.imageUrl).to.equal("something");
    done();
  });
});

describe("default values", () => {
  it("category and imageUrl should exists", (done) => {
    let by = "name";
    let description = "hi";
    let ingredients = ["egg"];
    const recipe = new Recipe({
      name: "chicken salad",
      ingredients,
      by,
      description,
      instruction: "cook",
      prepTime: "30m",
      cookTime: "1hr",
      servingSize: 4,
    });
    recipe.save(done);

    expect(recipe.category).to.equal("dinner");
    expect(recipe.imageUrl).to.equal("to be set");
    done();
  });
});
