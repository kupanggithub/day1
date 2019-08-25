var kata = 'hello word'
var balik = ' ' //untuk nampung kata/membalikan kata
for(var i = kata.length-1; i>=0; i--){  //-1karna array dimulai dri index0
  balik = balik +kata[i];
}
console.log(balik)