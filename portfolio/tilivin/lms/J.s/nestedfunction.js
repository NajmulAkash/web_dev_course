function nestfun(){
    console.log("Function 1 Runing");
    nestfun2()

    function nestfun2(){
        console.log("Function 2 Runing");
        nestfun3()

        function nestfun3(){
            console.log("Function 3 Runing");
        }
    }
}
nestfun()