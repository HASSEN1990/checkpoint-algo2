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

   function search2(set1, set2) {
    var tab=[...set1,...set2]
    var myMap = new Map()
    var ref = []
    var sc = 0;
    var sd = 0;
    for (let i=0; i<tab.length; i++) {
    if(myMap.has(tab[i])==false){
        myMap.set(tab[i],1)
        ref.push(tab[i])
       }
       else
       myMap.set(tab[i],myMap.get(tab[i])+1)
    }
    for (let i=0; i<ref.length;i++) 
        
        {
            if(myMap.get(ref[i])==1)
            sd=sd+ref[i]
            else
            {
                sc=sc+ ref[i]*myMap.get(ref[i])
            }
        }
        return {sum_distinct:sd,sum_com:sc}
    
  }
  var result=search2([1,5,3,8], [9,1,6,5])
console.log(result)