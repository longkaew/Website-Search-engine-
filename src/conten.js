import React, { Component } from 'react';
// 
import '../styleweb/conten.css';
import firebase from '../firebase';
import Pagination from './pageno';
function searchingFor(term) {
    return function (x) {
      
        return (x.generic_name.toLowerCase().includes(term.toLowerCase()) || 
        x.Name_type.toLowerCase().includes(term.toLowerCase()) || !term);
    }
  } 
  //  rows: prevState.rows.filter(searchingFor(e.target.value)),
  // searchTerm: e.target.value,

class Conten extends Component{
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            item_id: '',
            ID_medicine:'',
            ID_type:'',
            Name_type:'',
            DETAIL_type:'',
            ID_type2:'',
            NAME_type2:'',
            DETAIL_type2:'',
            ID_type3:'',
            NAME_type3:'',
            DETAIL_type3:'',
            ID_type4:'',
            Name_type4:'',
            DETAIL_type4:'',
            generic_name:'',
            syn_name:'',
            detail_generic_name:'',
            medicine_type:'',
            dosage:'',
            ED:'',
            suggestion: '',
            Condition: '',
            Warning: '',
            note: '',
            Footnote: '',
            term: '',
            rows: [],
            currentPage : 1,
            setCurrentPage:1,
            moviePerpage : 6
 
        }
        
    }
    componentDidMount() {
        const itemsRef = firebase.database().ref('testNew');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            var newState = [];
     
            for (let item in items) {
              
                newState.push({
    
                    item_id: item,
                    ID_medicine: items[item].ID_medicine,
                    ID_type: items[item].ID_type,
                    Name_type: items[item].Name_type,
                    DETAIL_type: items[item].DETAIL_type,
                    ID_type2: items[item].ID_type2,
                    NAME_type2: items[item].NAME_type2,
                    DETAIL_type2: items[item].DETAIL_type2,
                    ID_type3: items[item].ID_type3,
                    NAME_type3: items[item].NAME_type3,
                    DETAIL_type3: items[item].DETAIL_type3,
                    ID_type4: items[item].ID_type4,
                    NAME_type4: items[item].NAME_type4,
                    DETAIL_type4: items[item].DETAIL_type4,
                    generic_name: items[item].generic_name,
                    syn_name: items[item].syn_name,
                    detail_generic_name: items[item].detail_generic_name,
                    medicine_type: items[item].medicine_type,
                    dosage: items[item].dosage,
                    ED: items[item].ED,
                    suggestion: items[item].suggestion,
                    Condition: items[item].Condition,
                    Warning: items[item].Warning,
                    note: items[item].note,
                    Footnote: items[item].Footnote,
                })
            }
            try {
                this.setState({
                    items: newState,
                    rows: newState,
                    currentPage:1
                })
            } catch (exception) { }
        })
    }
    search(e) {
        this.setState({ term: e.target.value })
    }
    onNextForm() {
        this.setState({
    
        })
    }
    
    
    // onChangebutton = e => {
    //     if (e.target.files[0]) {
    //         const image = e.target.files[0];
    //         this.setState(() => ({ image, }));
    //     }
    // }
    render(){
      const lastMovie = this.state.currentPage * this.state.moviePerpage;
      const firstMovie = lastMovie - this.state.moviePerpage;
      const items = this.state.items.slice(firstMovie,lastMovie).filter(searchingFor(this.state.term))
;
      const paginate = pageNumber => this.setState({currentPage:pageNumber}) ;
      return(
        <div id="container--con" >
       
     

         <div class="row-item"> 
         <div className="in-input">
         <span class="input">
            <input type="text"  placeholder=" กรอกชื่อกลุ่มยา หรือชื่อยาที่ต้องการค้นหา" onChange={this.search.bind(this)} value={this.state.term} />

	    </span>  <Pagination movieperpage={this.state.moviePerpage} totalmovie={this.state.rows.length} paginate={paginate}/>
        </div>
        
         {/* <input type="text" class="from-input"  placeholder="Search for names.." onChange={this.search.bind(this)} value={this.state.term}/>       */}
         
         {/* {
               this.state.items.filter(searchingFor(this.state.term)).map((item) => {
                                return ( */}
            {items.map(item =>{  
              return ( 
            <div class="column-item" >
               
                    <div   >
                        <div class="con-card">
                        <div className="ED"> <p class="title-con" style={{fontWeight:"bold"}}>บัญชี {item.ED}</p></div>
                        <p class="title-con">กลุ่มยา : {item.Name_type}</p>
                        <p class="title-con">บัญชียาหลัก :  {item.NAME_type2} {item.NAME_type3} {item.NAME_type4}</p>
                        <p class="title-con">ชื่อยาทั่วไป :  {item.generic_name}</p>
                        <p class="title-con">ประเภทยา :  {item.dosage}</p>
                        <p class="title-con">รหัส :  {item.item_id}</p>
                        <p type="button" data-toggle="modal" data-target={'#'+item.item_id}>More...</p></div>
                    </div>
                   
                   {/* <!-- Button trigger modal --> */}


{/* <!-- Modal --> */}
<div class="modal fade" id={item.item_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header" style={{ background: "#CFE5EC"}}>
        <h5 class="modal-title" id="exampleModalScrollableTitle">ข้อมูลยา : {item.generic_name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="ED"> <p class="title-con" style={{fontWeight:"bold"}}>บัญชี {item.ED}</p></div>
                        <p class="title-con">รหัส :  {item.item_id}</p>
                        <p class="title-con">กลุ่มยา : {item.Name_type}</p>
                        <p class="title-con">บัญชียาหลัก :  {item.NAME_type2} {item.NAME_type3} {item.NAME_type4}</p>
                        <p class="title-con">ชื่อยาทั่วไป :  {item.generic_name}</p>
                        <p class="title-con">ชื่อยาที่คล้ายกัน :  {item.syn_name}</p>
                        <p class="title-con">รายละเอียด :  {item.detail_generic_name}</p>
                         <p class="title-con">ประเภทยา :  {item.dosage}</p>
                        <p class="title-con">คำแนะนำ :  {item.suggestion}</p>
                        <p class="title-con">เงื่อนไข :  {item.Condition}</p>
                        <p class="title-con">คำเตื่อนและข้อควรระวัง :  {item.Warning}</p>
                        <p class="title-con">หมายเหตุ :  {item.note}</p>
                        <p class="title-con">คำอธิบายเพิ่มเติม :  {item.Footnote}</p>
                       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>


                </div>
              
        //       )
        //     })
        // } 
             ) })} 
          </div>
         
            
      </div>
      );
    }
  }
  export default Conten;
  