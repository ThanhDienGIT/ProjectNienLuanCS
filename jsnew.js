
  // Biến lưu giá trị boolean
  // node
  var a;  
  const parent = document.getElementsByClassName("graph-frame")[0];
  // Mảng lưu trữ đỉnh
  var Arraynode=[];
    // Mảng lưu trữ cung
  var Arrayedge=[];  
    // Các biến toàn cục hỗ trợ bật tắt trạng thái
    var node=false;
    var edge=false;
    var deletenode=false;
    var deletedge=false;
    var prim=false;
    var deleteall=false;
    var savefile=false;
    var updatefile=false; 
    var listnode = document.getElementsByClassName("node");
    var ArrayAddEdge = [];
    var arrayvalueedge=[];
    var TESTLT=true;
    // Kiểm tra nút Create Node đã bật chưa
    function TestNode(){
      let button = document.getElementsByClassName("button");
      let elementnode = document.getElementById("create-node");
      elementnode.classList.toggle("newclass");
      if(elementnode.className =="button newclass"){
        node=true;
        for(i=0;i<listnode.length;i++){
          if(listnode[i].className=="node ui-draggable ui-draggable-handle newnode"){
            listnode[i].classList.remove("newnode");
          }
        }
        ArrayAddEdge.shift();
      }else node = false;
      if(edge == true){
        button[1].classList.remove("newclass");
        edge=false;
      }
      if(deletenode==true){
        button[2].classList.remove("newclass");
        deletenode=false;
      }
      if(deletedge == true){
        button[3].classList.remove("newclass");
        deletedge=false;
      }
      if(prim==true){
        button[4].classList.remove("newclass");
        prim=false;
      }
      if(deleteall == true){
        button[6].classList.remove("newclass");
        deleteall=false;
      }
      if(savefile==true){
        button[5].classList.remove("newclass");
        savefile=false;
      }
      if(updatefile == true){
        button[7].classList.remove("newclass");
        updatefile=false;
      }
    }
   // Kiểm tra nút Create edge đã bật chưa
    function TestEdge(){
      let button = document.getElementsByClassName("button");
      let elementedge = document.getElementById("create-edge");
      elementedge.classList.toggle("newclass");
      if(elementedge.className =="button newclass"){  
        edge=true;  
        CreateEdge();
      }else{
        edge=false;   
        for(i=0;i<listnode.length;i++){
          if(listnode[i].className=="node ui-draggable ui-draggable-handle newnode"){
            listnode[i].classList.remove("newnode");
            ArrayAddEdge.shift();  
          }
        }
      } 
      if(node == true){
        button[0].classList.remove("newclass");
        node=false;
      }
      if(deletenode==true){
        button[2].classList.remove("newclass");
        deletenode=false;
      }
      if(deletedge == true){
        button[3].classList.remove("newclass");
        deletedge=false;
      }
      if(prim==true){
        button[4].classList.remove("newclass");
        prim=false;
      }
      if(deleteall == true){
        button[6].classList.remove("newclass");
        deleteall=false;
      }
      if(savefile==true){
        button[5].classList.remove("newclass");
        savefile=false;
      }
      if(updatefile == true){
        button[7].classList.remove("newclass");
        updatefile=false
      }
    }
  // Kiểm tra nút delete note đã bật chưa
    function Testdeletenode(){
      let button = document.getElementsByClassName("button");
      let elementdeletenode = document.getElementById("delete-node"); 
      elementdeletenode.classList.toggle("newclass");
      if(elementdeletenode.className =="button newclass"){  
        deletenode=true;
        FCdeletenode();
        for(i=0;i<listnode.length;i++){
          if(listnode[i].className=="node ui-draggable ui-draggable-handle newnode"){
            listnode[i].classList.remove("newnode");
          }
          ArrayAddEdge.shift();       
        }
      }else deletenode = false;
      if(node == true){
        button[0].classList.remove("newclass");
        node=false;
      }
      if(edge==true){
        button[1].classList.remove("newclass");
        edge=false;
      }
      if(deletedge == true){
        button[3].classList.remove("newclass");
        deletedge=false;
      }
      if(prim==true){
        button[4].classList.remove("newclass");
        prim=false;
      }
      if(deleteall == true){
        button[6].classList.remove("newclass");
        deleteall=false;
      }
      if(savefile==true){
        button[5].classList.remove("newclass");
        savefile=false;
      }
      if(updatefile == true){
        button[7].classList.remove("newclass");
        updatefile=false;
      }
    }
  // Kiểm tra nút delete edge đã bật chưa
    function Testdeletedge(){
      let button = document.getElementsByClassName("button");
      let elementdeletedge = document.getElementById("delete-edge"); 
      elementdeletedge.classList.toggle("newclass");
      if(elementdeletedge.className == "button newclass"){  
        deletedge=true;
        DeleteEdge();
        for(i=0;i<listnode.length;i++){
          if(listnode[i].className=="node ui-draggable ui-draggable-handle newnode"){
            listnode[i].classList.remove("newnode");
          }
        }
        ArrayAddEdge.shift();
        
      }else deletedge = false;
      if(node == true){
        button[0].classList.remove("newclass");
        node=false;
      }
      if(edge==true){
        button[1].classList.remove("newclass");
        edge=false;
      }
      if(prim == true){
        button[4].classList.remove("newclass");
        prim=false;
      }
      if(deletenode==true){
        button[2].classList.remove("newclass");
        deletenode=false;
     
      }
      if(deleteall == true){
        button[6].classList.remove("newclass");
        deleteall=false;
      }
      if(savefile==true){
        button[5].classList.remove("newclass");
        savefile=false;
      }
      if(updatefile == true){
        button[7].classList.remove("newclass");
        updatefile=false;
      }
    }
  // Kiểm tra prim
    function Testprim(){
      let button = document.getElementsByClassName("button");
      let elementprim = document.getElementById("prim"); 
      if(elementprim.className =="button"){  
        prim=true;
        for(i=0;i<listnode.length;i++){
          if(listnode[i].className=="node ui-draggable ui-draggable-handle newnode"){
            listnode[i].classList.remove("newnode");
          }
        }
        ArrayAddEdge.shift();
       
      }else prim = false;
      if(node == true){
        button[0].classList.remove("newclass");
        node=false;
      }
      if(edge==true){
        button[1].classList.remove("newclass");
        edge=false;
      }
      if(deletedge == true){
        button[3].classList.remove("newclass");
        deletedge=false;
      }
      if(deletenode==true){
        button[2].classList.remove("newclass");
        deletenode=false;
      }
      if(deleteall == true){
        button[6].classList.remove("newclass");
        deleteall=false;
      }
      if(savefile==true){
        button[5].classList.remove("newclass");
        savefile=false;
      }
      if(updatefile == true){
        button[7].classList.remove("newclass");
        updatefile=false;
      }
    }
  // kiểm tra save
    function TestSavefile(){
      let button = document.getElementsByClassName("button");      

        ArrayAddEdge.shift();
          
      if(node == true){
        button[0].classList.remove("newclass");
        node=false;
      }
      if(edge==true){
        button[1].classList.remove("newclass");
        edge=false;
      }
      if(deletedge == true){ 
        button[3].classList.remove("newclass");
        deletedge=false;
      }
      if(prim==true){
        button[4].classList.remove("newclass");
        prim=false;
      }
      if(deleteall == true){
        button[6].classList.remove("newclass");
        deleteall=false;
      }
      if(deletenode==true){
        button[2].classList.remove("newclass");
        deletenode=false;
      }
      if(updatefile == true){
        button[7].classList.remove("newclass");
        updatefile=false;
      }
    }
  
  // kiểm tra xóa hết
    function Testdeleteall(){
      let button = document.getElementsByClassName("button");
       a  =document.getElementsByClassName('sum_w')[0];
       b  = document.getElementById('value-edge');
       a.innerText='';
       b.value='';
        Arrayedge.length=0;
        Arraynode.length=0;
        $('.node').remove();
        $('.edge').remove();
      ArrayAddEdge.shift(); 
      if(node == true){
        button[0].classList.remove("newclass");
        node=false;
      }
      if(edge==true){
        button[1].classList.remove("newclass");
        edge=false;
      }
      if(deletedge == true){
        button[3].classList.remove("newclass");
        deletedge=false;
      }
      if(deletenode==true){
        button[2].classList.remove("newclass");
        deletenode=false;
      }
      if(prim == true){
        button[4].classList.remove("newclass");
        prim=false;
      }
      if(savefile==true){
        button[5].classList.remove("newclass");
        savefile=false;
      }
      if(updatefile == true){
        button[7].classList.remove("newclass");
        updatefile=false;
      }
      console.log(Arraynode);
      console.log(Arrayedge);
    }
  
  // Kiểm tra uploadfile
    function Testuploadfile(){
      a = document.getElementById('upload-file');
      a.onclick = function(){
        $('#file-selector').click();
      }
            ArrayAddEdge.shift();
      if(node == true){
        button[0].classList.remove("newclass");
        node=false;
      }
      if(edge==true){
        button[1].classList.remove("newclass");
        edge=false;
      }
      if(deletedge == true){
        button[3].classList.remove("newclass");
        deletedge=false;
      }
      if(prim==true){
        button[4].classList.remove("newclass");
        prim=false;
      }
      if(deleteall==true){
        button[6].classList.remove("newclass");
        deleteall=false;
      }
      if(savefile==true){
        button[5].classList.remove("newclas s");
        savefile=false;
      }
      if(deletenode == true){
        button[2].classList.remove("newclass");
        deletenode=false;
      }
    }
  
    function CreateNote(event){    
      if(node==true){
        let ID  =  Arraynode.length+1;
        let x1  =  event.pageX;
        let y1  =  event.pageY;
        let node = {
          id :  ID,
          x  :  x1,
          y  :  y1
        } 
        Arraynode.push(node);
        // vẽ nút
        const lastitem = Arraynode[Arraynode.length-1];
           let text = document.createElement("p");
           text.setAttribute("class","text-node");
           text.innerHTML = lastitem.id;
           let div  = document.createElement("div");
           div.setAttribute("class","node");
           let x = lastitem.x;  
           let y = lastitem.y;
           div.style.left = -333 + x + 'px'; 
           div.style.top =  -116 + y +'px';
           parent.appendChild(div);
           div.appendChild(text);
      }else{} 
    }
    

   
    function CreateEdge(){
    if(edge==true){
      for(i=0;i<listnode.length;i++)
      {
        // Gán sự kiện cho tất cả các nút được chọn và thêm class
        listnode[i].onclick = function(e)
        {
            e.target.classList.toggle("newnode");
            // Thêm dô nếu đủ 2 node thì dừng add vào mảng
          if(e.target.className=="node ui-draggable ui-draggable-handle newnode" && ArrayAddEdge.length!=2)
          {
              ArrayAddEdge.push(e.target);
          }
            // Khi ấn nút 1 lần nữa sẽ xóa khỏi mảng
          if(ArrayAddEdge.length==1)
          { 
              if(ArrayAddEdge[0].className=="node ui-draggable ui-draggable-handle"){
                ArrayAddEdge.shift();
               }
          }
          else
          {
            if(ArrayAddEdge[0].className=="node ui-draggable ui-draggable-handle")
            {
                ArrayAddEdge.shift();
            }
            else
            {
              if(ArrayAddEdge[1].className=="node ui-draggable ui-draggable-handle")
              {
                ArrayAddEdge.pop();
              }
            }
          } 
       }
      }

        // khi nhấn đủ 2 nút !!
          if(ArrayAddEdge.length==2){    
              let id = Arrayedge.length+1;
              let node1 = Arraynode[ArrayAddEdge[0].innerText-1] ;
              let node2 = Arraynode[ArrayAddEdge[1].innerText-1]  ;  
              let value = 0;
            let Edge1 = {
              id : id,
              node1 : node1,
              node2 : node2,
              value : value
            }
            Arrayedge.push(Edge1);        
            // Tạo cung
        let lastItem = Arrayedge[Arrayedge.length - 1];
        let edge = document.createElement("div");
        edge.object = Edge1;
      
        edge.setAttribute("class","edge");
        parent.appendChild(edge);
        // tọa độ nút 1
        let x1 =lastItem.node1.x-333 ;
        let y1 =lastItem.node1.y-116 ;
        // tọa độ nút 2
        let x2 = lastItem.node2.x-333 ;
        let y2 = lastItem.node2.y-116 ;
        let radiustest
        if(x2 > x1 ){
          radiustest =true;
        }else{
          radiustest=false
        }
        // Tính độ dài của cung
        let LengthEdge = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))-38;
        edge.style.width= LengthEdge + "px";
        // Tọa độ của cung
        let x = (x2+x1+39)/2 - LengthEdge/2;
        let y = (y2+y1+40)/2 ;  
        // SET tọa độ của cung
        edge.style.left = x+'px' ;
        edge.style.top = y+'px';
         // Tính độ deg xoay cung     
         if(radiustest==true){
          radius = Math.atan2(x1-x2,y1-y2);
         }else{   
          radius = Math.atan2(x2-x1,y2-y1);
         }
        rot = (radius * (180/Math.PI) *-1) + 270 ;
        edge.style.transform = "rotate("+rot+"deg)";
        valueedge = document.createElement('div');
        valueedge.setAttribute('class','value');
        valueedge.innerText=0;
        edge.appendChild(valueedge)
          ArrayAddEdge[0].classList.toggle("newnode");
          ArrayAddEdge[1].classList.toggle("newnode");
          ArrayAddEdge.shift();
          ArrayAddEdge.shift(); 
          }
    }
    else
    {
      ArrayAddEdge.shift();
      ArrayAddEdge.shift();
      if(edge==false)
      {
        for(i=0;i<listnode.length;i++)
        {
          listnode[i].onclick = function(e){
          }
          listnode[i].classList.remove('newnode');
        }
      } 
    }
}  

  function AddValueEdge(){
       let edge = document.getElementsByClassName('edge');
       let changevalue = document.getElementById('value-edge');

        for(z=0;z<edge.length;z++){
            edge[z].classList.remove("edgeprim");
        }
        for(i=0;i<edge.length;i++){
          edge[i].onclick=function(e){
              e.target.classList.toggle('newedge');
              if(e.target.className=='edge newedge' && arrayvalueedge.length!=1){
                arrayvalueedge.push(e.target);
              }  
              if(e.target.className=='edge newedge' && arrayvalueedge.length==1){   
                changevalue.onchange = function(){
                    e.target.innerHTML='<div class="value">'+changevalue.value +'</div>';
                    e.target.classList.remove('newedge');
                    arrayvalueedge.shift();
                    if(e.target.className=='edge' && arrayvalueedge.length!=1){
                      arrayvalueedge.shift();
                      changevalue.onchange = function(){}
                    }
                    for(a=0;a<Arrayedge.length;a++){
                      if(e.target.object.id == Arrayedge[a].id){
                          Arrayedge[a].value = changevalue.value;
                      }
                    }
                    changevalue.value='';
                  }
                }  
            }
         }
  }
  //xóa cung
  function DeleteEdge(){
    let edge = document.getElementsByClassName('edge');
    if(deletedge == true){
      for(i=0;i<edge.length;i++){
        edge[i].onclick= function(e){
          e.target.remove();
          Arrayedge.splice(e.target.object.id-1,1);
        }
      }
      for(q=0;q<Arrayedge.length;q++){
        Arrayedge[q].id = q+1;
      }
    }
  }
  
  function FCdeletenode(){
    if(deletenode==true){
     let node = document.getElementsByClassName('node');
     let edge = document.getElementsByClassName('edge');
      var Arraydelete = [];
      for(i=0;i<node.length;i++){
        node[i].onclick=function(e){
              for(c=0;c<Arrayedge.length;c++){
              if(Arrayedge[c].node1.id==e.target.innerText || Arrayedge[c].node2.id==e.target.innerText){  
                  Arrayedge.splice(c,1);   
                  edge[c].remove(); 
                  c--;
                }      
              }             
              for(let i=0;i<Arrayedge.length;i++){
                Arrayedge[i].id = i+1 ;
              }
          for(a=0;a<Arraynode.length;a++){
            if(e.target.innerText==Arraynode[a].id){
                // xóa nút đầu mảng
                if(e.target.innerText-1==0){
                  Arraynode.shift();
                  e.target.remove();
                
                 for(t=0;t<Arraynode.length;t++){
                  Arraynode[t].id = Arraynode[t].id-1;
                  node[t].innerText=Arraynode[t].id; 
                 }
                }else{
                    // Xóa các nút giữa mảng
                    if(e.target.innerText-1 >=1 && e.target.innerText-1 <= Arraynode.length-2){
                      e.target.remove();
                      let a = e.target.innerText-1;
                      Arraynode.splice(a,1);
                      
                      for(j=a;j<Arraynode.length;j++){
                        Arraynode[j].id=Arraynode[j].id-1;
                        node[j].innerText=Arraynode[j].id;           
                      }    
                    }else{
                      if(e.target.innerText-1==Arraynode.length-1){
                        Arraynode.pop();
                        e.target.remove();  
                        for(j=a;j<Arraynode.length;j++){
                          console.log('id = '+Arraynode[j].id);
                          Arraynode[j].id=Arraynode[j].id-1;
                          node[j].innerText=Arraynode[j].id;                
                        }
                      }
                    }
                }
            }
          }  
        }
      }
    } 
  }
  
  // cấu trúc dữ liệu

  class Graph {
    constructor(size) {
        this.size = size;
        this.matrix = [];
        for (let i = 0; i < size; i++) {
            this.matrix.push([]);
            for (let j = 0; j < size; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    addEdge(vertex1, vertex2, weight) {
      if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
          console.log('invalid vertex');
      } else if (vertex1 === vertex2) {
          console.log('same vertex');
      } else {
          this.matrix[vertex1][vertex2] = weight;
          this.matrix[vertex2][vertex1] = weight;
      }
  }
  addVertex() {
    this.size++;
    this.matrix.push([]);
    for (let i = 0; i < this.size; i++) {
        this.matrix[i][this.size - 1] = 0;
        this.matrix[this.size - 1][i] = 0;
    }
}
printMatrix() {
  for (let i = 0; i < this.size; i++) {
      let row = '';
      for (let j = 0; j < this.size; j++) {
          row += ` ${this.matrix[i][j]}`;
      }
      console.log(row);
  }
}

}

let elementprim = document.getElementById("prim"); 
  var pi=[];
  var p=[];
  var Drawcolor=[];
  function Prim(){
      if(TESTLT==true){
        var T = new Graph(Arraynode.length);
        var div = document.getElementsByClassName("edge");
        var u;
        var v;
        var i;
        var z=true;
        for(z=0;z<Arrayedge.length;z++){
         T.addEdge(Arrayedge[z].node1.id-1,Arrayedge[z].node2.id-1,Arrayedge[z].value);
        }
        for(u=0;u<Arraynode.length;u++){
          pi[u]=9999999;
        }
        pi[0]=0;
        for(v=0;v<Arraynode.length;v++){
          if(T.matrix[0][v]!=0){
           pi[v]=T.matrix[0][v];
           p[v]=0;
          }
        }
       
        var mark=[];
        for(u=0;u<Arraynode.length;u++){
          mark[u]=0;
        }
        mark[0]=1;
        var sum_w=0;
        for(i=0;i<Arraynode.length-1;i++){
          var min_dist=9999999;
          var min_u;
          for(u=0;u<Arraynode.length;u++){
            if(pi[u]<min_dist && mark[u]==0){     
              min_dist=pi[u];
              min_u=u;         
            }
          } 
            u=min_u; 
            mark[min_u]=1;
            sum_w+=parseInt(min_dist);
            
            for(g=0;g<Arrayedge.length;g++){
              if(Arrayedge[g].node1.id-1==u && Arrayedge[g].node2.id-1==p[u] || Arrayedge[g].node2.id-1==u && Arrayedge[g].node1.id-1==p[u]){   
                Drawcolor.push(div[Arrayedge[g].id-1]);
              }
            }
            for(v=0;v<Arraynode.length;v++){    
              if(T.matrix[u][v]!=0  && mark[v]==0){
                if(pi[v]>T.matrix[u][v]){
                  pi[v]=T.matrix[u][v];
                  p[v]=u;
                }
              }
            }  
         }  
         if(sum_w>100000 || sum_w==NaN){
              alert('Phải nhập giá trị vào n-1 cung hoặc tất cả cung nếu như chỉ có n-1 cung');
          let text = document.getElementsByClassName('sum_w')[0].innerText='lỗi';
        }else{
          var text = document.getElementsByClassName('sum_w')[0].innerText=sum_w;
          for(let m=0;m<Drawcolor.length;m++){
            setTimeout(function(){
             Drawcolor[m].classList.add('edgeprim');    
              },500*(m+1)); 
           } 
        }
      }else{
        alert('Đồ thị không liên thông');
      } 
}
// GHI FILE ------------------------------------------------------------

function TestLT(){
  var G = new Graph(Arraynode.length);
  var markTest=[];
  var Q =[];
   if(G.size==0){
     alert('Đồ thị rỗng');
   }else{
    for(z=0;z<Arrayedge.length;z++){
      G.addEdge(Arrayedge[z].node1.id-1,Arrayedge[z].node2.id-1,1);
     }
      for(i=0;i<Arraynode.length;i++){
        markTest[i]=0;
      }
      markTest[0]=1;
      Q.push(0); 
      console.log(1);
      while(Q.length!=0){
        var x = Q[0];
        var A=[];
        for(j=0;j<Arraynode.length;j++){
          if(G.matrix[x][j]!=0){
            A.push(j); 
          }
        }
        for(q=0;q<A.length;q++){
          var y = A[q];
            if(markTest[y]==0){
              console.log(y+1);
              markTest[y]=1;
              Q.push(y);
            }
        }
        Q.shift();
      }
      for(a=0;a<Arraynode.length;a++){
        if(markTest[a]==0){
          TESTLT=false;
        }else{
          TESTLT=true;
        }
      }
     
  }
}

elementprim.addEventListener('click',TestLT);
elementprim.addEventListener('click',Prim);
parent.addEventListener('click',function(){Drawcolor.length=0;})
parent.addEventListener('click',CreateNote);
parent.addEventListener('click',CreateEdge);
parent.addEventListener('click',AddValueEdge);
parent.addEventListener('click',FCdeletenode);
parent.addEventListener('click',DeleteEdge);





