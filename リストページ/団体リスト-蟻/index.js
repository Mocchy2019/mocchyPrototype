"use strict";

// possible genres

const genres = ["art", "international", "martialArts", "sports"];

// helpers for making fake data

const randBool = p => Math.random() < p;

const randInRange = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));

const randElem = ar => ar[randInRange(0, ar.length - 1)];

const randGroup = i => ({
  name: `団体${i}`,
  official: randBool(0.5),
  members: randInRange(2, 100),
  genre: randElem(genres),
  manyParties: randBool(0.5),
  usefulForJob: randBool(0.5),
});

const mkArr = (n, f) => {
  const ret = Array(n);
  for (let i = 0; i < n; i++) {
    ret[i] = f(i);
  }
  return ret;
};

// fake data

const groups = mkArr(50, randGroup);

// state

const reducer = (s, a) => ({ ...s, ...a });

const stateKeys = genres.concat([
  "official",
  "unofficial",
  "manyParties",
  "fewParties",
  "usefulForJob",
  "notUsefulForJob",
  "members01to10",
  "members11to50",
  "members51toInf",
]);

const init = stateKeys.reduce((ac, g) => {
  ac[g] = true;
  return ac;
}, {});

// given the current user-selected criteria and an item, return whether that
// item should be shown

const shouldShow = criteria => item =>
  (item.official ? criteria.official : criteria.unofficial) &&
  (item.manyParties ? criteria.manyParties : criteria.fewParties) &&
  (item.usefulForJob ? criteria.usefulForJob : criteria.notUsefulForJob) &&
  criteria[item.genre] &&
  ((0 < item.members && item.members <= 10 && criteria.members01to10) ||
    (10 < item.members && item.members <= 50 && criteria.members11to50) ||
    (50 < item.members && criteria.members51toInf));

// React components

const { createElement: e, Fragment, useReducer } = React;

const Checkbox = ({ name, checked, onChange }) =>
  e(
    "div",
    null,
    e("label", null, e("input", { type: "checkbox", checked, onChange }), name),
  );

const Chooser = ({ s, d }) =>
  e(
    Fragment,
    null,
    stateKeys.map(g =>
      e(Checkbox, {
        key: g,
        name: g,
        checked: s[g],
        onChange: e => d({ [g]: e.target.checked }),
      }),
    ),
  );

const ItemView = props =>
  e(
    "tr",
    { key: props.name },
    e("td", null, props.name),
    e("td", null, String(props.official)),
    e("td", null, props.members),
    e("td", null, props.genre),
    e("td", null, String(props.manyParties)),
    e("td", null, String(props.usefulForJob)),
  );

const ItemList = ({ items }) =>
  e(
    "table",
    null,
    e(
      "thead",
      null,
      e(
        "tr",
        null,
        e("th", null, "name"),
        e("th", null, "official"),
        e("th", null, "members"),
        e("th", null, "genre"),
        e("th", null, "manyParties"),
        e("th", null, "usefulForJob"),
      ),
    ),
    e("tbody", null, items.map(ItemView)),
  );

const App = () => {
  const [s, d] = useReducer(reducer, init);
  return e(
    Fragment,
    null,
    e(Chooser, { s, d }, null),
    e(ItemList, { items: groups.filter(shouldShow(s)) }, null),
  );
};

// render

ReactDOM.render(e(App, null), document.getElementById("root"));
