import { actionAndAssertion } from '../utils/actionsAndAssertion';

export class editorPage {
constructor(page) {
    this.page = page;   
    this.action = new actionAndAssertion(this.page);    
    // this.editOption = '.menu-container:has-text("Edit")';
    this.nocon ="button-component[value='math-pre-requisite-step-no']";
    this.review ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.reviewclk ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    //this.Articletitle ='input[title="articletitle"]';
    //this.atrributename="articletitle"
    //this.atrributevalue="articletitle"
    this.verifyarticletitle ='input[title="articletitle"]';
    this.timewait="100000";
    this.verify ="button-component[value='verified']";
    this.reviewclk2 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyAuthours ='input[title="authors"]';
    this.verify2 ="button-component[value='verified']";
    this.reviewclk3 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifycorrespondingauthor ='input[title="correspondingauthor"]';
    this.verify3 ="button-component[value='verified']";
    this.reviewclk4 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyemail ='.smart-qc-error[data-xml-qc-msg*="e-mail"]';
    this.verify4 ="button-component[value='verified']";
    this.reviewclk5 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifydummy1 ='input[title="dummy"]';
    this.verify5 ="button-component[value='verified']";
    this.reviewclk6 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyabstract ='input[title="abstract"]';
    this.verify6 ="button-component[value='verified']";
    this.reviewclk7 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifydummy2 ='input[title="dummy"]';
    this.verify7 ="button-component[value='verified']";
    this.reviewclk8 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyparagraph1 ='input[title="paragraph"]';
    this.verify8 ="button-component[value='verified']";
    this.reviewclk9 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyparagraph2 ='input[title="fnconflict"]';
    this.verify9 ="button-component[value='verified']";
    this.reviewclk10 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifydummy3 ='input[title="dummy"]';
    this.verify10 ="button-component[value='verified']";
    this.verifysectiona ='input[title="sectiona"]';
    this.reviewclk11 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verify11 ="button-component[value='verified']";
    this.reviewclk12 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyparagraph3 ='input[title="paragraph"]';
    this.verify12 ="button-component[value='verified']";
    this.reviewclk13 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";                  
    this.verifydummy4 ='input[title="dummy"]';
    this.verify13 ="button-component[value='verified']";
    this.Next = "button-component[value='next']";
//Step 2
    this.verifiedack1 = "error-container[error-type='fm']";
    this.errorfm = "error-container[error-type='fm']";
    this.verified1 = "button-component[value='verified']";
    this.errortb = "error-container[error-type='table']";
    this.verified2 = "button-component[value='verified']";
    this.Next2 = "button-component[value='next']";
    this.Nextstep2 = "button-component[value='next']";
    this.waittime2="200000";
//Step 3
    this.verifiedack2 = "div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1)";
    this.Partialtxt = "div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1)";    
    this.Corrected1 = "button-component[value='corrected']" ;
    this.Displaymath = ".right-icon"
    this.Corrected2 = "button-component[value='corrected']" ;
    this.Fulltext   = ".right-icon";
    this.Corrected3 = "button-component[value='corrected']";
    this.nmelement  =".right-icon"
    this.Corrected4 = "button-component[value='corrected']";
    this.AuthorEditorsurname1 = ".right-icon";
    this.Corrected5 = "button-component[value='corrected']";
    this.Graphicalabstract = ".right-icon";
    this.Corrected6 = "button-component[value='corrected']";
    // this.RinggoldIDcount = ".right-icon";
    // this.Corrected7 = "button-component[value='corrected']";
    this.Titlenotallowed =".right-icon";
    this.Corrected8 = "button-component[value='corrected']";
    this.Unlistedcrossref = ".right-icon";
    this.Corrected9 = "button-component[value='corrected']";
    this.Supportinglink = ".right-icon";
    this.Corrected10 = "button-component[value='corrected']";
    this.authorwithoutsurname =".right-icon";
    this.Corrected11 = "button-component[value='corrected']";
    this.Inconsistentauthorname1 = ".right-icon";
    this.Corrected12 = "button-component[value='corrected']";
    this.AuthorEditorsurname2 = ".right-icon";
    this.Corrected13 = "button-component[value='corrected']";
    this.Inconsistentauthorname2 = ".right-icon";
    this.Corrected14 = "button-component[value='corrected']";
    this.bibreferenceidbib24 =".right-icon";
    this.ignore1 = "button-component[value='ignore']";
    this.bibreferenceidbib25 =".right-icon";
    this.ignore2 = "button-component[value='ignore']";
    this.bibreferenceidbib26 =".right-icon";
    this.ignore3 = "button-component[value='ignore']";
    this.bibreferenceidbib27 = ".right-icon";
    this.ignore4 = "button-component[value='ignore']";
    this.bibreferenceidbib28 = ".right-icon";
    this.ignore5 = "button-component[value='ignore']";
    this.bibreferenceidbib29 = ".right-icon";
    this.ignore6 = "button-component[value='ignore']";
    this.bibreferenceidbib34 = ".right-icon";
    this.ignore7 = "button-component[value='ignore']";
    //validate
    this.validate ="button-component[value='next']";
    this.submit ="button-component[value='submit']";

    this.clickptxt ="img[src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAwCAYAAABkOeaOAAAACXBIWXMAABCcAAAQnAEmzTo0AAAABGJhU0UAAAAY00gKyAAAA2pJREFUeF7tmUvITVEUx5c3kbwKIeUxkGciJSaIxAADRaEYiIkBBh55FaUMZCAG9IWSR1HKIykTZIYkJYlSpCiP5BXr3zr3s791zz137332uX2D9at/X2edc++3zj7rrr3+9xKlYRRrgA4a5RnG+sPaq08Y5dnAesj6a6pTaa6wduugUZ7erK+safqEUZ7FrNc6aKTheCajAlC1qF4jMeiz6Lfou6mYwXpA8r5PWIs6nu40VJ4nJgRMCqkYyLrEmsmaxbrF+sYa7l7UCWhJnphtMeOmYjWJIakxhGRWXOrEqmIl6wjrGsmCFVF5nnjz39nfVPRUx11YP1iTVbwqTpHcU399QlF5njVXViVTWXd1sAmoujE66Mlt1j0d9CAmz0Ja4cpOssbpYBMesfbpoAd9WN9Ze/QJD2LybEgrXBk+GXN00IPYxV1I0jeb9VtNbJ4NCXVlg1nHWCdY21kbWR9YE9yLHFaw5jvH3Uj6mg+xi4vN7COrB0n1vs2OD7sXKcrk2ZAQVzae9Yw67qToa0g+j+WsLSQfM2gSyVeZSNyH2MXFrHqRdZA1j2QCOEdSzTjWlM2zIb6uDAm+Z21V8VesNhUDC0h2Xf21HZLOo1+OsEiHcuJFRgcTD/7PHeq44+MeEd/sxEBonu3gCRQR4sraSCrUvRa/ViCRNU4sBiyYvrki3ZSX5YJccA2q1mVdFl+i4lEsY/1izdYnHHxdGR4CEtuh4qhixPGzUBm6kmwkWi9Yp3PiE+VluZxl/aR6h3WB9Yn8CqkQLCws3GfWfXXOxdeV7SdZRHcn7UvSJl46sdSE9lxsQO9Y51V8CsmCr1XxKHaSLDAqDb+H5bmUEFeGasDiYlKogfd+StIuUHljnXOpCF1cGADkucmJ9SLp3ZedWBJw03hiedNAiCvDpoKk15M8KLST6SQbwQHWLtag9qvTEbq420jynJsdowWcYR2lepubhKsk7UET4sqGkoxcX1g3SGba7qw3WXzE/0uTErq4mA6uk7gszLcoKp9JKJrRJE9zlRNrhStLARZrpA52Np5nqhHqyowCULWoXlQxCHFlhgfou+i/wNeVGZ6gUjE5YJf3dWWGJxihMPM+Jj9XZgQCt4be6+PKjEDwPYOvKzMigDU2KgKW2DAMwzAMwzAMwzAMwzAMw4N/5bAIVkLPX68AAABvdEVYdE1hdGhNTAA8bWF0aD48bXNxcnQ+PG1zdXA+PG1pPmE8L21pPjxtbj4yPC9tbj48L21zdXA+PG1vPis8L21vPjxtc3VwPjxtaT5iPC9taT48bW4+MjwvbW4+PC9tc3VwPjwvbXNxcnQ+PC9tYXRoPiCa1nEAAAAASUVORK5CYII=']";
    this.eqa =".wrs_focusElement";
    this.pos ="input[aria-label='Math input']";
    this.keyboardact1 ="input[aria-label='Math input']";
    this.backspace= "Backspace";
    this.Copykey= "Control+X"
    this.delete ="delete"
    this.PasteKey = "Control+V";
    this.fill= "A=";
    this.mathupdate ="button-component[value='update-equation']";
    this.cursormath ="displaymath[xml-math][data-xml-tag-name]";
    this.leftArrow='ArrowLeft';
    this.arrowno="2";
    this.deleteno="2";
    this.selectfn ="div:nth-child(1) > div:nth-child(1) > bibitem:nth-child(27) > aus:nth-child(12) > au:nth-child(2) > fnm:nth-child(1)";
    this.Dropcontain ='input[type="text"][placeholder="aus, au, fnm"][title="aus, au, fnm"]';
    this.clickeditor ='input[type="text"][placeholder="aus, au, fnm"][title="aus, au, fnm"]';
    this.edic =".options-list.open";
    this.unclickfnm ='div.option[title="fnm"]';
    this.inputtextbox ='.textbox-container:nth-of-type(2) > .search-input';
    this.fillinput= "snm";
    this.clicksnm='div.option[title="snm"]';
    this.fnmtox ='bibitem[data-xml-type="node"][data-xml-tag-name="bibitem"]:nth-of-type(1)';
    this.selectcomma="div:nth-child(1) > div:nth-child(1) > bibitem:nth-child(27) > aus:nth-child(12) > au:nth-child(2) > fnm:nth-child(2)";
    this.selectspace="div:nth-child(1) > div:nth-child(1) > bibitem:nth-child(27) > aus:nth-child(14) > au:nth-child(1) > fnm:nth-child(1)";
    this.fillinputx1="x";
    this.clickcommaasx='div.option[title="x"]';

    this.keywordsDefault ="div:nth-child(1) > div:nth-child(1) > keywordsdefault:nth-child(12) > st:nth-child(1)";
    this.Pressenter ="Enter";
    this.space="Control+Space"
    this.Xparachange="Control+Shift+S"
    this.keywordstext ='.search-input[placeholder="Select Paragraph Style"][value="coversheet"][title="keywordsdefault"]';
    this.copyall="Control+A"
    this.xpara="xpara"
    this.clickxpara ='div.option[title="xpara"]';

    this.submittedtext ="";
    
    

  }

  // async openUrl()
  // {
  //   await this.page.goto(process.env.URL);
  // }
  async clicknocon()
  {
    await this.action.elementClick(this.nocon);
  }
  async reviewIsVisible()
  {        
    await this.action.elementVisible(this.review);
  }
  async clickreviewclk()
  {
    await this.action.elementClick(this.reviewclk);
  }
  async verifyarticletitleIsVisible()
  {        
    await this.action.elementVisible(this.verifyarticletitle);
  }
  // async getElementAttribute (){
  //   await this.action.getElementAttribute(this.Articletitle,this.atrributename,this.atrributevalue)
  // }

  async clickverify()
  {
    await this.action.elementClick(this.verify);
  }
  async clickreviewclk2()
  {
    await this.action.elementClick(this.reviewclk2);
  }
  async verifyAuthoursIsVisible()
  {        
    await this.action.elementVisible(this.verifyAuthours);
  }
  async clickverify2()
  {
    await this.action.elementClick(this.verify2);
  }
  async clickreviewclk3()
  {
    await this.action.elementClick(this.reviewclk13);
  }
  async verifycorrespondingauthorsIsVisible()
  {        
    await this.action.elementVisible(this.verifycorrespondingauthor);
  }
  async clickverify3()
  {
    await this.action.elementClick(this.verify3);
  }
  async clickreviewclk4()
  {
    await this.action.elementClick(this.reviewclk13);
  }
  async verifyemailsIsVisible()
  {        
    await this.action.elementVisible(this.verifyemail);
  }
  async clickverify4()
  {
    await this.action.elementClick(this.verify4);
  }
  async clickreviewclk5()
  {
    await this.action.elementClick(this.reviewclk5);
  }
  async verifydummy1sIsVisible()
  {        
    await this.action.elementVisible(this.verifydummy1);
  }
  async clickverify5()
  {
    await this.action.elementClick(this.verify5);
  }
  async clickreviewclk6()
  {
    await this.action.elementClick(this.reviewclk6);
  }
  async verifyabstract1sIsVisible()
  {        
    await this.action.elementVisible(this.verifyabstract);
  }
  async clickverify6()
  {
    await this.action.elementClick(this.verify6);
  }
  async clickreviewclk7()
  {
    await this.action.elementClick(this.reviewclk7);
  }
  async verifydummy21sIsVisible()
  {        
    await this.action.elementVisible(this.verifydummy2);
  }
  async clickverify7()
  {
    await this.action.elementClick(this.verify7);
  }
  async clickreviewclk8()
  {
    await this.action.elementClick(this.reviewclk8);
  }
  async verifyparagraph1sIsVisible()
  {        
    await this.action.elementVisible(this.verifyparagraph1);
  }
  async clickverify8()
  {
    await this.action.elementClick(this.verify8);
  }
  async clickreviewclk9()
  {
    await this.action.elementClick(this.reviewclk9);
  }
  async verifyparagraph2sIsVisible()
  {        
    await this.action.elementVisible(this.verifyparagraph2);
  }
  async clickverify9()
  {
    await this.action.elementClick(this.verify9);
  }
  async clickreviewclk10()
  {
    await this.action.elementClick(this.reviewclk10);
  }
  async verifydummy3sIsVisible()
  {        
    await this.action.elementVisible(this.verifydummy3);
  }
  async clickverify10()
  {
    await this.action.elementClick(this.verify10);
  }
  async clickreviewclk11()
  {
    await this.action.elementClick(this.reviewclk11);
  }
  async verifysectionaIsVisible()
  {        
    await this.action.elementVisible(this.verifysectiona);
  }
  async clickverify11()
  {
    await this.action.elementClick(this.verify11);
  }
  async clickreviewclk12()
  {
    await this.action.elementClick(this.reviewclk12);
  }
  async verifyparagraph3IsVisible()
  {        
    await this.action.elementVisible(this.verifyparagraph3);
  }
  async clickverify12()
  {
    await this.action.elementClick(this.verify12);
  }
  async clickreviewclk13()
  {
    await this.action.elementClick(this.reviewclk13);
  }
  async verifydummy4IsVisible()
  {        
    await this.action.elementVisible(this.verifydummy4);
  }
  async clickverify13()
  {
    await this.action.elementClick(this.verify13);
  }
  async NextIsVisible()
  {        
    await this.action.elementVisible(this.Next);
  }
  async clickNext()
  {
    await this.action.elementClick(this.Next);
  }
  async wait(){
  await this.action.waitTime(this.timewait);
  }
////// Step 2 -----
  async verifiedack1rsIsVisible()
  {        
    await this.action.elementVisible(this.verifiedack1);
  }
  async clickerrorfm()
  {
    await this.action.elementClick(this.errorfm);
  }
  async clickverified1()
  {
    await this.action.elementClick(this.verified1);
  }
  async clickerrortb()
  {
    await this.action.elementClick(this.errortb);
  }
  async clickverified2()
  {
    await this.action.elementClick(this.verified2);
  }
  async Next2IsVisible()
  {        
    await this.action.elementVisible(this.Next2);
  }
  async clickNextstep2()
  {
    await this.action.elementClick(this.Nextstep2);
  }
  async wait(){
    await this.action.waitTime(this.waittime2);
  }

/////Step 3 --------
  async verifiedack2sIsVisible()
  {        
    await this.action.elementVisible(this.verifiedack2);
  }
  async ArrowandDelaction(){
    await this.action.iterationkeyAction(this.leftArrow,this.arrowno)
    await this.action.iterationkeyAction(this.backspace,this.deleteno)
  }
  async clickclickpxt()
  {
    await this.action.elementClick(this.clickptxt);
  }
  async eqaIsVisible()
  {
    await this.action.elementVisible(this.eqa);
  }
  async cursoroneqn(){
    await this.action.elementClick(this.pos);
  }
  async BackspaceKey(){
    await this.action.keyAction(this.backspace)
  }
  async Copytxt(){
  await this.action.keyAction(this.Copykey)
  }
  async Pastetxt()
  {
  await this.action.keyAction(this.PasteKey)
  }
  async Filltext()
  {
  await this.action.typeCharacters(this.pos,this.fill)
  }
  async clickUpdate()
  {
   await this.action.elementClick(this.mathupdate);
  }
   async cursrmath()
  {
  await this.action.insertText(this.cursormath,0);
  }
  async clickCorrected()
  {
    await this.action.elementClick(this.Corrected1);
  }
  async clickDisplaymath()
  {
    await this.action.elementVisible(this.Displaymath);
  }
  async clickCorrected2()
  {
    await this.action.elementClick(this.Corrected2);
  }
  async clickFulltext()
  {
    await this.action.elementVisible(this.Fulltext);
  }
  async clickCorrected3()
  {
    await this.action.elementClick(this.Corrected3);
  }
  async clickerrorfnm()
  {
    await this.action.elementClick(this.Partialtxt);
  }
  async Selectionfn()
  {
    await this.action.selectText(this.selectfn,0,3);
  }
  async Dropcon()
  {        
    await this.action.elementVisible(this.Dropcontain);
  }
  async clicksearch()
  {
    await this.action.elementClick(this.clickeditor);
    await this.action.elementVisible(this.edic);
  }
  async selectsnm()
  {
   //await this.action.elementVisible(this.inputtextbox);
   await this.action.keyActioninsert(this.fillinput)
  }
   async changesnm()
  {
    await this.action.elementClick(this.clicksnm);
    await this.action.elementVisible(this.Corrected1);
    //await this.action.elementClick(this.Corrected1);
  }
  async Selectionsnm()
  {
    await this.action.selectText(this.selectcomma,0,1);
  }

  async commaasx()
  {        
    await this.action.elementVisible(this.Dropcontain);
    await this.action.elementClick(this.clickeditor);
  }
  async EditformVisible()
  {
    await this.action.elementVisible(this.edic);
  }
  async FillandclickX()
  {
    await this.action.keyActioninsert(this.fillinputx1)
    await this.action.elementClick(this.clickcommaasx);
  }
  async Selectionspacex()
  {
    await this.action.selectText(this.selectspace,0,1);
    await this.action.elementVisible(this.Dropcontain);
    //await this.action.elementClick(this.Corrected1);
  }  
  async ClickandEditformVisible()
  {
    await this.action.elementClick(this.clickeditor);
    await this.action.elementVisible(this.edic);
  }
  async Filltextandupdate()
  {
    await this.action.keyActioninsert(this.fillinputx1)
    await this.action.elementClick(this.clickcommaasx);
  }
  async MarkCorrected()
  {
    await this.action.elementClick(this.Corrected3);
  }
  async clickAuthorEditorsurname1()
  {
    await this.action.elementVisible(this.AuthorEditorsurname1);
  }
  async clickCorrected5()
  {
    await this.action.elementClick(this.Corrected5);
  }
  async clickGraphicalabstract()
  {
    await this.action.elementVisible(this.Graphicalabstract);
  }
  async clickCorrected6()
  {
    await this.action.elementClick(this.Corrected6);
  }
  async keywordsdefault()
  {
    await this.action.insertText(this.keywordsDefault,8);
    await this.action.keyAction(this.Pressenter)
  }
  async Selectkeywordstext()
  {
    await this.action.selectText(this.keywordsDefault,0,8);
    
  }
  async UseKeyboardaction()
  {
    await this.action.keyAction(this.space);
    await this.action.keyAction(this.Xparachange);
  }
   async ChangeXpara()
   {
    // await this.action.insertText(this.keywordsDefault,4);
    await this.action.elementClick(this.keywordstext)
    await this.action.keyAction(this.copyall);
  }
  async clickxparatochange()
  {
    await this.action.keyAction(this.backspace);  
    await this.action.keyActioninsert(this.xpara);
    await this.action.elementClick(this.clickxpara);
  }
  async Markascorrected()
  {
    await this.action.elementClick(this.Corrected6);
  }
  async clickUnlistedcrossref()
  {
    await this.action.elementVisible(this.Unlistedcrossref);
  }
  async clickCorrected9()
  {
    await this.action.elementClick(this.Corrected9);
  }
  async clickSupportinglink()
  {
    await this.action.elementVisible(this.Supportinglink);
  }
  async clickCorrected10()
  {
    await this.action.elementClick(this.Corrected10);
  }
  async clickauthorwithoutsurname()
  {
    await this.action.elementVisible(this.authorwithoutsurname);
  }
  async clickCorrected11()
  {
    await this.action.elementClick(this.Corrected11);
  }
  async clickInconsistentauthorname1()
  {
    await this.action.elementVisible(this.Inconsistentauthorname1);
  }
  async clickCorrected12()
  {
    await this.action.elementClick(this.Corrected12);
  }
  async clickAuthorEditorsurname2()
  {
    await this.action.elementVisible(this.AuthorEditorsurname2);
  }
  async clickCorrected13()
  {
    await this.action.elementClick(this.Corrected13);
  }
  async clickInconsistentauthorname2()
  {
    await this.action.elementVisible(this.Inconsistentauthorname2);
  }
  async clickCorrected14()
  {
    await this.action.elementClick(this.Corrected14);
  }
  async clickbibreferenceidbib24()
  {
    await this.action.elementVisible(this.bibreferenceidbib24);
  }
  async clickCorrected15()
  {
    await this.action.elementClick(this.ignore1);
  }
  async clickbibreferenceidbib25()
  {
    await this.action.elementVisible(this.bibreferenceidbib25);
  }
  async clickCorrected16()
  {
    await this.action.elementClick(this.ignore2);
  }
  async clickbibreferenceidbib26()
  {
    await this.action.elementVisible(this.bibreferenceidbib26);
  }
  async clickCorrected17()
  {
    await this.action.elementClick(this.ignore3);
  }
  async clickbibreferenceidbib27()
  {
    await this.action.elementVisible(this.bibreferenceidbib27);
  }
  async clickCorrected18()
  {
    await this.action.elementClick(this.ignore4);
  }
  async clickbibreferenceidbib28()
  {
    await this.action.elementVisible(this.bibreferenceidbib28);
  }
  async clickCorrected19()
  {
    await this.action.elementClick(this.ignore5);
  }
  async clickbibreferenceidbib29()
  {
    await this.action.elementVisible(this.bibreferenceidbib29);
  }
  async clickCorrected20()
  {
    await this.action.elementClick(this.ignore6);
  }
  async clickbibreferenceidbib34()
  {
    await this.action.elementVisible(this.bibreferenceidbib34);
  }
  async clickCorrected21()
  {
    await this.action.elementClick(this.ignore7);
  }
  async clickvalidate()
  {
    await this.action.elementClick(this.validate);
  }

////// Submit is visible
  async submitIsVisible()
  {
    await this.action.elementVisible(this.submit);
  }
  async clickSubmit()
  {
    await this.action.elementClick(this.submit);
  }
  async AftersubmittedUI()
  {
    await this.action.elementVisible(this.submittedtext);
  }
}

