

var myList = ['apples', 'oragnges', 'banas'];
// arra yis a list of items 

// myList.shift() will remove first item 
// mylist.pop() will remove last item 
myList.forEach(function(value,index) {
    alert(' I have '+value+' in my shopping bag');
});

//loopping is lopping 
// while , do and for loop are three different style loops 

//while () { } //as long as what is in the  () while wll exectute whats 
// in the curley bracket 
var times = 0;
while(times <10) {
    console.log('tried it', times );
    times = times +1;
}
// while runs check first and if its falseit wont  run,otherwiserun
//do loop is below 
do {
    console.log( 'tried', times );
    times++;
} while(times<10); 
// runs once then it checks
// they look the exacttttt same 
//for loop is most complicated. 
//for(setup, comparison, change) <it will do 3arguements;happens every time 

var myList = ['Apples', 'Oranges', 'Bananas'];

for (var i = 0; i<myList.length; i++) {
    console.log(' you have '+myList[i]+'inyour basket');
}

//usefull because i is the length of array 
alert(' clone this and practice yourself, dont forget to check out the dev tools to see whats happening');