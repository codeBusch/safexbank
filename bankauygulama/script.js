
var accountA = {
    id : 123,
    pass :'1234',
    name : 'Bahri',
    surname : 'Bas',
    balance : 100,
    additionalAccount : accountAdditional
};
var accountAdditional= {
    id :  1231,
    pass :'1234',
    name :'Bahri',
    surname : 'Bas',
    balance : 150
};
var Accounts= [accountA];
var idFound =function(id){
    var item = null;
    Accounts.forEach(element => {
        if(element.id == id){
            item=element;
        }
    });
    return item;
}
var paraCek= function(hesap,cekilecekMiktar){
    if(hesap.balance<cekilecekMiktar){
        let devam =prompt('yeterli bakiyeniz yoktur. ek hesabı kullanmak istermisiniz kullanmak istiyorsanız 1 e  istemiyorsanız 2');
        if(devam === '1'){
            if(hesap.additionalAccount.balance+hesap.balance < cekilecekMiktar){
                alert('yeterli bakiyeniz yoktur.');
            }else{
                cekilecekMiktar-=hesap.balance;
                hesap.balance=0;
                hesap.additionalAccount.balance-=cekilecekMiktar
                alert(`Paranız başarıyla çekilmiştir\n çekilen miktar:${cekilecekMiktar} \nana hesap bakiyesi:${hesap.balance} \n ek hesapta kalan bakiye:${hesap.additionalAccount.balance}.`);
            }
        }else{
            alert('iyi günler sistemden çıkılıyor.');
        }
    }else{
        hesap.balance-= cekilecekMiktar;
        alert(`Paranız başarıyla çekilmiştir çekilen miktar:${cekilecekMiktar} kalan bakiye:${hesap.balance}.`);
    }
}
var paraYatir=function(hesap,yatirilacakMiktar){
    if(yatirilacakMiktar<=0){
        alert('para yatirdiginizdan emin olunuz.');
    }else{
        let islem = prompt(`ana hesap icin 1 ek hesaba para yatirmak için 2 yi tuslayiniz.`);
        if(islem ==='1'){
            hesap.additionalAccount.balance+=yatirilacakMiktar;
            alert(`Ek Hesabınıza para başarılı şekilde yatırılmıştır  güncel ek  hesap bakiyeniz ${hesap.additionalAccount.balance}`);
        }else if(islem ==='2'){
            hesap.balance+=yatirilacakMiktar;
            alert(`Ana Hesabınıza para başarılı şekilde yatırılmıştır  güncel  ana hesap bakiyeniz ${hesap.balance}`);
        }else{
            alert('hatali islem sisteme yeniden gir.');
        }
    }
    

}
var islem= null;
while(islem != 'q'){
    alert('bankamatige hos geldiniz  id ve sifrenizi giriniz.');
    var id = Number(prompt('ıd giriniz.'));
    var item = idFound(id);
    if( item!= null){
        let pass= prompt('password giriniz.');
            if(pass!=item.pass){
                alert('hatali giris uygulama yeniden baslatilacak sayfayi yenileyiniz...');
            }
            else{
                islem=prompt(`${item.name} ${item.surname} Uygulamaya hoş geldiniz çıkmak için q ya basınız.\nİşlemler... para çekmek için 1 \npara yatırmak için 2  giriniz. `);
                if(islem ==='1'){
                    let miktar =parseInt(prompt('çekmek istediniz miktarı giriniz.'));
                    paraCek(item,miktar);
                }else if(islem ==='2'){
                    let miktar = parseInt(prompt('yatirmak istediniz miktari giriniz.'));
                    paraYatir(item,miktar);
                }else{
                    alert('yanlis secim yaptiniz tekrar deneyiniz.');
                }
            }
    }else{
        alert('hesap bulunamadi uygulama yeniden baslatiliyor...');
    }
}