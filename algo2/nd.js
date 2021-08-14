function search(set1, set2) {
  var tab=[...set1,...set2]
  var found
  var sc=0;
  var sd = 0;

  for (let i=0; i<tab.length; i++) {
  found=false
  for (j=0;j<tab.length;j++) {
 if (tab[i]==tab[j] && i!=j) {
found=true
sc=sc+tab[i]
break;
 }
}

if (!found) {
sd=sd+tab[i];
  }
  }
  return {
 sum_distinct: sd,
sum_commun: sc,
}

}

var result=search([1,5,3,8], [9,1,6,5])
console.log(result)