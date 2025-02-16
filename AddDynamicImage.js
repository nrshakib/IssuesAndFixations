// When you want to display an image acquired from the backend,this is how you should do it:

// ReactJS

 <img
    src={`http://type.your.ip.here:port/${image?.ImageVariable}`}
    alt={`Story image ${index + 1}`}
    className="w-32 h-32 rounded-lg object-cover"
/>


  // NextJs
 <Image
    src={`http://type.your.ip.here:port/${image?.ImageVariable}`}
    alt={`Story image ${index + 1}`}
    className="w-32 h-32 rounded-lg object-cover"
/>
