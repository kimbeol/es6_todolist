window.onload = function() {
 
    let menu;

    function getId(phoneNumber) {
        menu += 1;
    }
    function getEmail(id) {
        menu += 1;
    }
    function getName(email) {
        menu += 1;
    }
    function order(name, menu) {
        menu += 1;
    }

    async function orderCoffee(phoneNumber) {
        return getId(phoneNumber).then(
                function(id){
                    return  getEmail(id);
                }).then(
                function(email){
                    return getName(email);
                }).then(
                function(name){
                    return order(name, 'coffee');
                }).then(
                function(){
                    alert(menu);
                }
            )
    }


    setTimeout(function(){
        trigger(orderCoffee());
        
    },2000);

}
