"use strict";

// possible genres

const genres = ["art", "international", "martial-arts", "sports"];

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

const init = {
  genres: genres.slice(),
  official: true,
  unofficial: true,
  manyParties: true,
  fewParties: true,
  usefulForJob: true,
  notUsefulForJob: true,
  members01to10: true,
  members11to50: true,
  members51toInf: true,
};

// given the current user-selected criteria and an item, return whether that
// item should be shown

const shouldShow = criteria => item =>
  (item.official ? criteria.official : criteria.unofficial) &&
  (item.manyParties ? criteria.manyParties : criteria.fewParties) &&
  (item.usefulForJob ? criteria.usefulForJob : criteria.notUsefulForJob) &&
  criteria.genres.includes(item.genre) &&
  ((0 < item.members && item.members <= 10 && criteria.members01to10) ||
    (10 < item.members && item.members <= 50 && criteria.members11to50) ||
    (50 < item.members && criteria.members51toInf));

// React components

const { createElement: e, Fragment, useReducer } = React;

const Checkbox = ({ name, checked, onChange }) =>
  e(
    Fragment,
    null,
    e("input", { type: "checkbox", id: name, checked, onChange }),
    e("label", { htmlFor: name }, name),
  );

const Chooser = ({ s, d }) =>
  e(
    Fragment,
    null,
    e(Checkbox, {
      name: "official",
      checked: s.official,
      onChange: e => d({ official: e.target.checked }),
    }),
    e(Checkbox, {
      name: "unofficial",
      checked: s.unofficial,
      onChange: e => d({ unofficial: e.target.checked }),
    }),
    e(Checkbox, {
      name: "manyParties",
      checked: s.manyParties,
      onChange: e => d({ manyParties: e.target.checked }),
    }),
    e(Checkbox, {
      name: "fewParties",
      checked: s.fewParties,
      onChange: e => d({ fewParties: e.target.checked }),
    }),
    e(Checkbox, {
      name: "usefulForJob",
      checked: s.usefulForJob,
      onChange: e => d({ usefulForJob: e.target.checked }),
    }),
    e(Checkbox, {
      name: "notUsefulForJob",
      checked: s.notUsefulForJob,
      onChange: e => d({ notUsefulForJob: e.target.checked }),
    }),
    e(Checkbox, {
      name: "members01to10",
      checked: s.members01to10,
      onChange: e => d({ members01to10: e.target.checked }),
    }),
    e(Checkbox, {
      name: "members11to50",
      checked: s.members11to50,
      onChange: e => d({ members11to50: e.target.checked }),
    }),
    e(Checkbox, {
      name: "members51toInf",
      checked: s.members51toInf,
      onChange: e => d({ members51toInf: e.target.checked }),
    }),
  );

const ItemView = props => e("div", { key: props.name }, JSON.stringify(props));

const ItemList = ({ items }) => items.map(ItemView);

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
