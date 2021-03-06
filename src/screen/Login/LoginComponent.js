
import React from 'react';
import Nav from '../../components/global/nav';
import Header from '../../components/global/header';
import Footer from '../../components/global/footer';
import Form from '../../components/login/form';
import M from 'materialize-css';
import $ from 'jquery';
import UpupGirl from '../../components/global/upupgirl';
import Girl from '../../components/global/girl';
import BackTop from '../../components/global/backTop';
import SearchModal from '../../components/global/searchModal';
import UserProfile from "write user profile component paht here... as i don't know path in your project";

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            //to be fetched dynamically
            loginStatus : false,
        }

        //implement these changes to every component as login and register components needs to be replaced

        if(this.state.loginStatus){
            this.state.headerText = "user profile";
            document.title = "User Profile | Upupmanga";
        }
        else{
            this.state.headerText = "login to your account"
        }
        
    }



    render(){
        return(
            <div className="app">
                {this.selectNavForPage()}
                <Header text={this.state.headerText}/>
                {this.selectMainContentForPage()}
                <Footer />
                <UpupGirl />
                <Girl />
                <BackTop />
                <SearchModal />
                
            </div>
        );
    }
    
    componentDidMount(){

        

        //JQuery Initialization

        let select = document.querySelectorAll('select'),
        sidenav = document.querySelectorAll('.sidenav'),
        dropdown = document.querySelectorAll('.dropdown-trigger'),
        collapsible = document.querySelectorAll('.collapsible'),
        datepicker = document.querySelectorAll('.datepicker'),
        modal = document.querySelectorAll('.modal'),
        tabs = document.querySelectorAll('.tabs');
    

        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Dropdown.init(dropdown,{coverTrigger : false});
        M.Collapsible.init(collapsible);
        M.Datepicker.init(datepicker);
        M.Modal.init(modal);
        M.Tabs.init(tabs);

        $('#back-top').each(function(){
            $(this).click(function(){ 
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false; 
            });
        });


    }
    
    selectNavForPage(){
        
        if(this.state.loginStatus){
            return <Nav activeLink="user profile" loginStatus={true}/>;
        }
        else{
            return <Nav activeLink="login" loginStatus={false} />
        }
    
    }

    selectMainContentForPage(){

        if(this.state.loginStatus){
            return <UserProfile />
        }
        else{
            return <Form />
        }

    }


}

export default Login;
