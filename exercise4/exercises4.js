var hari = '21' 
var bulan = 1;
var tahun = 1998; 

switch(bulan) {
  case 1:   hari + ' Januari ' + tahun; break; 
  case 2:   hari + ' Februai ' + tahun; break; 
  case 3:   hari + ' Maret ' + tahun; break; 
  case 4:   hari + ' April ' + tahun; break;
  case 5:   hari + ' Mei ' + tahun; break; 
  case 6:   hari + ' Juni ' + tahun; break;
  case 7:   hari + ' Agustus ' + tahun; break;
  case 9:   hari + ' September ' + tahun; break;
  case 10:  hari + ' Oktober '+ tahun; break;
  case 11:  hari + ' Nopember ' + tahun; break;
  default:  hari + ' Desember ' + tahun;
  
}

console.log(hari +', '+  bulan +' '+ tahun)