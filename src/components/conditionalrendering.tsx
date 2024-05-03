function ConderingRendering(){ 
  let content;
 let newCondition=true;
 let newCon1=true;
  return( 
    <div className="flex flex-col gap-5 p-3"> 
   {content}
   {newCondition? <div className="bg-blue-500  ">Condition true</div>:<div>Condition false</div>}
   { newCon1 && <div className="bg-red-500">Condition true</div>}
    </div>
  )
}
export default ConderingRendering;