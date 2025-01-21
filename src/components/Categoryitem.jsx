

const Categoryitem = ({title="Unlisted",image}) => {
  return (    
    <div className="relative rounded-md">
      <img src={image}
       className=" min-w-[60vw]  max-h-[20vh]  sm:min-w-[20rem]  sm:max-h-[13rem] rounded-md"/>
      
<div>
     <h1 className="absolute top-1/2 sm:left-[200px]
     left-1/2  transform -translate-x-1/2 -translate-y-1/2
     text-2xl font-bold text-white z-10 ">{title}</h1>
</div>
    </div> 
  )
}

export default Categoryitem
