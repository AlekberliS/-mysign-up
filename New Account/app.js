links.forEach( link => {
    link.addEventListener( "click", e => 
    {e.preventDefault(); 
    formvalidate.classlist.toggle("signup");
})
})
links.forEach( link => {
    link.addEventListener( "click", e => 
    {e.preventDefault(); 
    formvalidate.classlist.toggle("newacc");
})
})