import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,  TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
 
result :{
    flex:2 ,
    backgroundColor:"#000000",
    justifyContent:"center" ,
    alignItems:"flex-end",
},

calculation:{
    flex:1  ,
    backgroundColor:"#000000",
    justifyContent:"center" ,
    alignItems:"flex-end",
},

button :{
    flex:8 ,
    backgroundColor:"#000000c9",
    flexDirection:"row",
},
number :{
    flex:3 ,


    
},
opertion :{
    flex:1 ,
    backgroundColor:"#f58221",

    
},

resultText :{
 fontSize:35,
  color:"white",
} ,
caltext :{

 fontSize:24,
  color:"white",
} ,

numberbtndesing :{
    
     flex:1 ,
     alignItems:'center' ,
     justifyContent:'center',
 

}  ,
numbertext:{
  fontSize:30,
  color:"white",
},

onerownumber :{

flex:1,
flexDirection:"row",

},

 });

export default class LotsOfStyles extends Component {


        constructor(){
          super();
          this.state= {
            resultText :"" ,
            calculated: ""
          
          }
           this.opertionsArray =["D",'+','-','*','/'];
        }
   

     calculateResult(){
       const text= this.state.resultText
        eval(text);
       this.setState({
        calculated  :eval(text)
       })
      
     }
    
     validate() {
       const text = this.state.resultText
        
        switch(text.slice(-1)) {
            case  '+':
            case  '-':
            case  '*':
            case '/' :
            return false 
           }
           return true 
     }


    buttonPressed(text){
  
      if(text == "="){
        return this.validate() && this.calculateResult()
      }

      this.setState({
        resultText:this.state.resultText+text
      })
    }

        operate(opertation){
           let text="";let lastchar ;
           
          switch(opertation) {

            
            case 'D':
            text= this.state.resultText.split('')
            
            text.pop()
            this.setState({
              resultText : text.join('')
            })
                        break 
            case  '+':
            case  '-':
            case  '*':
            case '/' :
       
          lastchar =this.state.resultText.split('').pop()
          if(this.opertionsArray.indexOf(lastchar)>0) return 

            if(this.state.text=="") {
               console.log("null text")
              return}
            this.setState({
              resultText:this.state.resultText +opertation
            })
            
          }

        }



  render() {
    let rows =[];
    let nums=[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']];
  
    for(let i=0;i<4;i++){
      let row=[];
        for(let j=0;j<3;j++){
              row.push(<TouchableOpacity onPress={()=>this.buttonPressed(nums[i][j])} style={styles.numberbtndesing}>
      <Text style={styles.numbertext}>{nums[i][j]}</Text>
           </TouchableOpacity>)
        }
        rows.push(<View style={styles.onerownumber}>{row}</View>)
    }

     
      let ops= [];
      for(let i=0;i<this.opertionsArray.length;i++){
                 
       ops.push((<TouchableOpacity style={styles.numberbtndesing}
       onPress={()=>this.operate(this.opertionsArray[i])}
       >
      <Text style={styles.numbertext}>{this.opertionsArray[i]}</Text>
           </TouchableOpacity>))
      }



    return (
      <View style={{flex:1}}>
      <View style={styles.result}>
      <Text style={styles.resultText}>
       {this.state.resultText}
      </Text>
      </View>             
      <View style={styles.calculation}>
      <Text style={styles.caltext}>
      {this.state.calculated}
      </Text>
      </View>  
        <View style={styles.button}>
      <View style={styles.number}>
          {rows}
      </View>
     
      <View style={styles.opertion}>
             {ops}
      </View>
   </View>

       </View>
    );
  }
}


