// Lowest common ancestor
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}
function getLowestCommonManager(topManager, reportOne, reportTwo) {
  function lca(root) {
    if (!root) return null;
    if (root === reportOne || root === reportTwo) return root;
    let count = 0;
    let temp = null;
    for (let report of root.directReports) {
      let node = lca(report);
      if (node) {
        count += 1;
        temp = node;
      }
    }
    if (count === 2) return root;
    return temp;
  }

  return lca(topManager);
}

const A = new OrgChart("A");
const B = new OrgChart("B");
const C = new OrgChart("C");
const D = new OrgChart("D");
const E = new OrgChart("E");
const F = new OrgChart("F");
const G = new OrgChart("G");
const H = new OrgChart("H");
const I = new OrgChart("I");
A.directReports = [B, C];
B.directReports = [D, E];
C.directReports = [F, G];
D.directReports = [H, I];
const lca = getLowestCommonManager(A, E, I);
console.log("LCA of E & I:", lca.name);
