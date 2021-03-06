import {find, findOne} from "../../../../dom/traverse";
import {empty} from "../../../../dom/manipulate";

QUnit.module("dom/manipulate/empty()",
    {
        beforeEach: () =>
        {
            findOne("#qunit-fixture").innerHTML = `
                <div class="test">
                    <p>content</p>
                </div>
                <p class="test">content</p>
            `;
        },
    }
);


QUnit.test(
    "with valid node element",
    (assert) =>
    {
        const element = find(".test")[0];

        assert.notEqual(element.innerHTML.length, 0, "element contains something before the empty() was executed");
        empty(element);
        assert.equal(element.innerHTML, "", "element is empty");
        assert.equal(element.children.length, 0, "element contains no children");
    }
);


QUnit.test(
    "with an array of elements",
    (assert) =>
    {
        const elements = find(".test");

        assert.notEqual(elements[0].innerHTML, 0, "first element contains something before the empty() was executed");
        assert.notEqual(elements[1].innerHTML, 0, "second element contains something before the empty() was executed");
        empty(elements);
        assert.equal(elements[0].innerHTML, "", "first element is empty");
        assert.equal(elements[1].innerHTML, "", "second element is empty");
    }
);


QUnit.test(
    "with an (query) string as an element",
    (assert) =>
    {
        empty("#test-element");
        assert.ok(true, "a non-element argument is just ignored");
    }
);


QUnit.test(
    "with an empty array",
    (assert) =>
    {
        empty([]);
        assert.ok(true, "the previous code should have run successfully");
    }
);
