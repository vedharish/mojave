import {children, find, findOne} from "../../../../dom/traverse";
import {createElement, prepend} from "../../../../dom/manipulate";


QUnit.module("dom/manipulate/prepend()",
    {
        beforeEach: () =>
        {
            findOne("#qunit-fixture").innerHTML = `
                <div id="test-parent">
                    <div class="first"></div>
                    <div class="second"></div>
                </div>
            `;
        },
    }
);


QUnit.test(
    "with node as parent and child",
    (assert) =>
    {
        const parent = findOne("#test-parent");
        const prependChild = createElement(`<div class="className"></div>`);
        prepend(parent, prependChild);

        assert.equal(find(".className").length, 1, "has one occurrence");
        assert.equal(parent.firstElementChild, prependChild, "is first element");
    }
);


QUnit.test(
    "with node as parent and html string as a child",
    (assert) =>
    {
        const parent = findOne("#test-parent");
        prepend(parent, `<div class="className"></div>`);

        assert.ok(parent.firstElementChild.classList.contains("className"), "is first element");
    }
);


QUnit.test(
    "with node as parent and an array of nodes as children",
    (assert) =>
    {
        const parent = findOne("#test-parent");
        const prependChildren = [createElement("div"), createElement("div")];
        prepend(parent, prependChildren);

        const childElements = children(parent);
        assert.equal(childElements[0], prependChildren[0], "is first element");
        assert.equal(childElements[1], prependChildren[1], "is second element");
    }
);


QUnit.test(
    "with node as parent and invalid child",
    (assert) =>
    {
        assert.throws(
            () => {
                prepend(findOne("#test-parent"), null);
            },
            "function threw an error"
        );
    }
);


QUnit.test(
    "with invalid parent and a node as a child",
    (assert) =>
    {
        assert.throws(
            () => {
                prepend(null, createElement("div"));
            },
            "function threw an error"
        );
    }
);
