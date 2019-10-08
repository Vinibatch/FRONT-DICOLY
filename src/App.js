        import React from 'react';
        import Img from 'react-image';
        import { Form, FormGroup, Label, Input,Button,Alert,} from 'reactstrap';
        import './App.css';
        import Image from 'react-bootstrap/Image';


        export default class Example extends React.Component {                                     //
          constructor(props) {                                                                                                //  Initialisation de props par default 
            super(props);                                                                                                       //
            this.state = {value: ''};            //

        }
        handleChange(event) {
          this.setState({value: event.target.value});
        }
        
        
        callAPI() {                                                                   // methode call API pour recuperer les données et les stocker sur this.state.apiResponse. 
            fetch("http://localhost:9000/testAPI")
                .then(res => res.text())
                .then(res => this.setState({movies :  data.movies.title}));
        }
        
        componentWillMount() {        // methode pour excuter callAPI apres que le composant est été lancée. 
            this.callAPI();
        }

          render() {

            return (
              
             <div   style ={{  backgroundColor: "#16a085"}}>

              <div className="App">
              <header className= "App-header">
              <h1 className="App-title"> Welcometo Dicoly
              </h1>
              </header>
                                <form>
                    <label>
                      Entrez le mot a définir  :
                      <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Envoyer" />
                  </form>
              <p className="App-intro">  {this.state.val}</p>

              </div>
</div>

      //   <div className= "Style">
      //         <div>
      //                  <Form>
      //                       <FormGroup>
      //             <Label for="exampleText">Ecrivez le mot a comprendre</Label>
      //             <Input type="textarea" name="text" id="exampleText" />
      //                              </FormGroup>
      //                      </Form>
      //                    </div>
      //                    <Button title='Rechercher' onPress={() => {}}/>
      //              <div>
      //                    <Alert color="primary">
      //           "" a été  ""
      //                         </Alert>
      //         </div>
            
      //  </div>
                  );
               }
             }
           