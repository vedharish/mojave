import {filter, find, findOne} from "../../../../dom/traverse";

QUnit.module("dom/traverse/filter()",
    {
        beforeEach: () =>
        {
            findOne("#qunit-fixture").innerHTML = `
                <div class="test-element element1"></div>
                <div class="test-element test-class element2">
                    <div class="test-element element2-1"></div>
                </div>
                Some text
                <div class="test-element element3"></div>
                <div class="test-element test-class element4"></div>
            `;
        },
    }
);


QUnit.test(
    "filter() on element with specific class",
    (assert) =>
    {
        const elements = find(".test-element");

        const result = filter(elements, ".element2");

        assert.equal(result.length, 1, "found 1 element");
        assert.ok(result[0].classList.contains("element2"), "found .element2");
    }
);


QUnit.test(
    "filter() on multiple elements with specific class",
    (assert) =>
    {
        const elements = find(".test-element");

        const result = filter(elements, ".test-class");

        assert.equal(result.length, 2, "found 2 elements");
        assert.ok(result[0].classList.contains("element2"), "found .element2");
        assert.ok(result[1].classList.contains("element4"), "found .element4");
    }
);


QUnit.test(
    "filter() on element with a wrong class",
    (assert) =>
    {
        const elements = find(".test-element");

        const result = filter(elements, ".no-element");

        assert.equal(result.length, 0, "found 0 elements");
    }
);
