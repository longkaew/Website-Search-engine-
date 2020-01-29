import React ,{Component} from 'react';
import './App.css';
import firebase from './firebase'
import image1 from './photo/3643762-find-glass-magnifying-search-zoom_113420.png'
function searchingFor(term) {
  return function (x) {
      return (x.Name_GroupFarmer.toLowerCase().includes(term.toLowerCase()) || x.Province.toLowerCase().includes(term.toLowerCase()) || x.Status.toLowerCase().includes(term.toLowerCase()) || !term);
  }
}
class home extends Component{
  
  constructor() {
      super();
      this.state = {
        items: [],
        item_id: '',
        RegisterCritiria:'',
        YearRegister:'',
        Tumbom:'',
        Status:'',
        ProvinceCode:'',
        Province:'',
        NumberAddress:'',
        Name_GroupFarmer:'',
        Moo:'',
        LivestockSource:'',
        AnimalSource: '',
        AmphurCode: '',
        Amphur:'',
          term:''
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
  
    }
    componentDidMount() {
      const itemsRef = firebase.database().ref('info');
      itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
        for (let item in items){
          newState.push({
            item_id: item,
            RegisterCritiria: items[item].RegisterCritiria,
            YearRegister: items[item].YearRegister,
            Tumbom: items[item].Tumbom,
            Status: items[item].Status,
            ProvinceCode: items[item].ProvinceCode,
            Province: items[item].Province,
            NumberAddress: items[item].NumberAddress,
            Name_GroupFarmer: items[item].Name_GroupFarmer,
            Moo: items[item].Moo,
            LivestockSource: items[item].LivestockSource,
            AnimalSource: items[item].AnimalSource,
            AmphurCode: items[item].AmphurCode,
            Amphur: items[item].Amphur,
          })
        }
        try {
          this.setState({
              items:newState
          })
      } catch (exception) { }
      })
    }
    search(e){
      this.setState({ term: e.target.value })
    }
      render(){
  return (
      <div className="App-header">
<form>
  <div class="form-row">
    <div class="col-5 mt-5 t">
      <input type="text" class="form-control rounded-pill" placeholder="คำค้น" name="RegisterCritiria" onChange={this.search.bind(this)} />
    </div>
    <div class="col-1 mt-5">
                <select class="form-control rounded-pill" onChange={this.search.bind(this)} value={this.state.term}>
                    <option>ปทุมธานี</option>
                    <option>เชียงใหม่</option>
                    <option>ลำปาง</option>
                    <option>อุบลราชธาี</option>
                    <option>แม่ฮ่องสอน</option>
                    <option>น่าน</option>
                    <option>เลย</option>
                    <option>ขอนแก่น</option>
                    <option>บุรีรัมย์</option>
                    <option>นครสวรรค์</option>
                </select>
    </div>
    <div class="col-1 mt-5">
                <select class="form-control rounded-pill" onChange={this.search.bind(this)} value={this.state.term}>
                    <option>สำรวจ</option>
                    <option>ยกเลิก</option>
                    <option>ยืนยัน</option>
                </select>
    </div>
  </div>
  
</form>
<div className="container  p-5 mb-5 B rounded ">
<div className="row border-right App-link aaaa">
                    <div className="col-2 border-dark border-left border-top"><font color="black">RegisterCritiria</font></div>
                    <div className="col-5 border-dark border-left border-top"><font color="black">Name_GroupFarmer</font></div>
                    <div className="col-3 border-dark border-left border-top"><font color="black">Province</font></div> 
                    <div className="col border-dark border-left border-top"><font color="black">Status</font></div>
                    <div className="col border-dark border-left border-top border-right"></div>               
                    </div>
                    {
                      
                             this.state.items.filter(searchingFor(this.state.term)).map((item) => {
                                return (
                                  <div class="column-item">
                                  <div className="row border App-link1 ">
                                      <div className="col-2 border-dark border-top border-left"><font color="black">{item.RegisterCritiria}</font></div>
                                      <div className="col-5 border-dark border-top border-left"><font color="black">{item.Name_GroupFarmer}</font></div>
                                      <div className="col-3 border-dark border-top border-left"><font color="black">{item.Province}</font></div>
                                      <div className="col border-dark border-top border-left"><font color="black">{item.Status}</font></div>
                                      <div className="col border-dark border-top border-left"><p type="button" data-toggle="modal" data-target={'#'+item.item_id}>
                                        <img className=" tu " src={image1} width="40" height="40">
                                        </img></p></div>
                                      </div>

                                      <div class="modal fade" width="500" id={item.item_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                                      <div class="modal-dialog modal-lg" >
                                        <div class="modal-content">
                                          <div class="modal-header " style={{ background: "#6AC98D"}}>
                                            <h5 class="modal-title ml-5" id="exampleModalScrollableTitle"><font color="white" >รายละเอียด</font></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button>
                                          </div>
                                          <div class="modal-body">
                                          <font color="black" ><p class="title-con ml-5">RegisterCritiria :  {item.RegisterCritiria}</p>
                                                            <p class="title-con ml-5">Name_GroupFarmer :  {item.Name_GroupFarmer}</p>
                                                            <p class="title-con ml-5">Status :  {item.Status}</p>
                                                            <p class="title-con ml-5">YearRegister :  {item.YearRegister}</p>
                                                            <p class="title-con ml-5">AmphurCode :  {item.AmphurCode}</p>
                                                            <p class="title-con ml-5">ProvinceCode :  {item.ProvinceCode}</p>
                                                             <p class="title-con ml-5">AnimalSource :  {item.AnimalSource}</p>
                                                            <p class="title-con ml-5">LivestockSource :  {item.LivestockSource}</p>
                                                            <p class="title-con ml-5">NumberAddress :  {item.NumberAddress}</p>
                                                            <p class="title-con ml-5">Moo :  {item.Moo}</p>
                                                            <p class="title-con ml-5">Tumbom :  {item.Tumbom}</p>
                                                            <p class="title-con ml-5">Amphur :  {item.Amphur}</p>
                                                            <p class="title-con ml-5">Province :  {item.Province}</p></font>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                ) })} 
                         
      </div>
      </div>
   );
    }
  }
export default home;
