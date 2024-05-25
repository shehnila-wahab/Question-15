let guest_list : string[] = ['Ali','aman','ayan','sana','saba'];
for(let i=0; i<guest_list.length; i++){
    console.log('respected sir/madam' + guest_list[i] + ',\we invited you on dinner tomorrow.\nthank tou\n')
}
 let not_present : string ="aman";
 let new_guest : string = "shehnila";
 guest_list[1] = new_guest;
 for(let i=0; i<guest_list.length; i++){
    console.log('respected sir/madam' + guest_list[i] + ',\we invited you on dinner tomorrow.\nthank tou\n')
 }
 console.log(`Mr ${not_present} will not  come for dinner tomorrow`)

 export {guest_list}