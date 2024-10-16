import { basename } from 'path';
import { actionAndAssertion } from '../utils/actionsAndAssertion';

import { sharedBrowserContext } from '../fixtures/fixtures';

export class editorPage {
constructor(page) {
    this.page= page;
    this.action = new actionAndAssertion(this.page);

    //// Link Generation ----------
    this.JID ="#jid"
    this.typejid ="JZ"    
    this.AID ="#aid"
    this.typeaid ="4C01650"    
    this.UploadTUDxml ='#xml';
    this.Tudpath ='D:/Files/JZ_4C01650_tud.xml';
    this.ClickSubmitButton = ".primary"
    this.Respond ="#response_container";
    this.LinK ='a[href^="http://10.0.8.123:3000"]';
    this.ParentURL = 'http://10.0.8.123:3000/create-project.html'
    this.switchTab ='0';
    this.switchTab1 ='1';
    this.Nocontinue ='img[title="Bold (Ctrl+B)"]';
    this.Uploadjson = '#as';
    this.jsonpath ='D:/Files/JZ_4C01650_tud_as.json'
    this.URL2 ="D:\XML-Reg2\XML_BDD_UI\env\.env.qa\URL2"

    ///// Step 1 -------
    // this.editOption = '.menu-container:has-text("Edit")';
    this.nocon ="button-component[value='math-pre-requisite-step-no']";
    this.review ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.reviewclk ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.clickstep3ack1 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    this.verifyarticletitle ='input[title="articletitle"]';
    this.timewait="200000";
    this.verify ="button-component[value='verified']";
    this.reviewclk2 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyAuthours ='input[title="authors"]';
    this.reviewclk3 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifycorrespondingauthor ='input[title="correspondingauthor"]';
    this.reviewclk4 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyemail ='.smart-qc-error[data-xml-qc-msg*="e-mail"]';
    this.reviewclk5 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifydummy1 ='input[title="dummy"]';
    this.reviewclk6 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyabstract ='input[title="abstract"]';
    this.reviewclk7 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifydummy2 ='input[title="dummy"]';
    this.reviewclk8 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyparagraph1 ='input[title="paragraph"]';
    this.reviewclk9 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyparagraph2 ='input[title="fnconflict"]';
    this.reviewclk10 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifydummy3 ='input[title="dummy"]';
    this.verifysectiona ='input[title="sectiona"]';
    this.reviewclk11 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.reviewclk12 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    this.verifyparagraph3 ='input[title="paragraph"]';
    this.reviewclk13 ="div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";                  
    this.verifydummy4 ='input[title="dummy"]';
    this.Next = "button-component[value='next']";


///// Step 2 -------
    this.verifiedack1 = "error-container[error-type='fm']";
    this.errorfm = "error-container[error-type='fm']";
    this.Frontmattercontent ='input[title="articletitle"]';
    this.verified1 = "button-component[value='verified']";
    this.errortb = "error-container[error-type='table']";
    this.Tablecontent ='input[title="tablecaption"]';
    this.verified2 = "button-component[value='verified']";
    this.Next2 = "button-component[value='next']";
    this.Nextstep2 = "button-component[value='next']";
    this.waittime2="300000";

    
////// Step 3 -------
    this.waittime3 ="400000"
    this.verifiedack2 = "div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1)";
    this.Partialtxt = "div:nth-child(1) > div:nth-child(2) > unacknowledged-errors:nth-child(1) > div:nth-child(1) > div:nth-child(2) > error-container:nth-child(2) > div:nth-child(1)";    
    this.Corrected = "button-component[value='corrected']" ;
    this.Displaymath = 'input[title="displaymath"]'
    this.Fulltext   = '[title="displaymath"]';
    this.nmelement  =".right-icon"
    this.AuthorEditorsurname1 = ".right-icon";
    this.Graphicalabstract = '[title="coversheet"]';
    this.Titlenotallowed =".right-icon";
    this.Unlistedcrossref = 'input[title="paragraph"]';
    this.Supportinglink = 'input[title="sectiona"]';
    this.authorwithoutsurname ='input[title="bibitem"]';
    this.Inconsistentauthorname1 ='input[title="bibitem"]';
    this.AuthorEditorsurname2 = ".right-icon";
    this.Inconsistentauthorname2 = 'input[title="bibitem"]';

    this.bibreferenceidbib24 ='input[title="bibitem"]';
    this.ignore = "button-component[value='ignore']";
    this.bibreferenceidbib25 ='input[title="bibitem"]';
    this.bibreferenceidbib26 ='input[title="bibitem"]';
    this.bibreferenceidbib27 ='input[title="bibitem"]';
    this.bibreferenceidbib28 = 'input[title="bibitem"]';
    this.bibreferenceidbib29 ='input[title="bibitem"]';
    this.bibreferenceidbib34 ='input[title="bibitem"]';

    ////// validate to submit ------
    this.validate ="button-component[value='next']";
    this.submit ="button-component[value='submit']";
   ///// Actions
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
    this.arrowno1="2";
    this.deleteno1="1";
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
    this.submittedtext =".notification-description";
    this.browser ="browser" 
    this.waittime10 ="10000"
    this.waittime20 ="20000"
    this.waittime30 ="30000" 
    this.ENVURL2 ="D:\\XML-Reg2\\XML_BDD_UI\\env\\.env.qa\\URL2"
  }
  ///// Link Generation-----
  async TypeJid()
  {
    await this.action.deleteUrl2FromEnv('D:\\XML-Reg2\\XML_BDD_UI\\env\\.env.qa');
    await this.action.elementVisible(this.JID);
    await this.action.elementClick(this.JID);
    await this.action.keyActioninsert(this.typejid)
  }
  async TypeAid()
  {
    await this.action.elementVisible(this.AID);
    await this.action.elementClick(this.AID);
    await this.action.keyActioninsert(this.typeaid);
  }
  async Uploadtud()
  {
    await this.action.elementVisible(this.UploadTUDxml);
    await this.action.uploadFileByCssLocator(this.UploadTUDxml,this.Tudpath);
  }
  async UPloadJson()
  {
    await this.action.elementVisible(this.Uploadjson);
    await this.action.uploadFileByCssLocator(this.Uploadjson,this.jsonpath);
    
  }
  async Submitclick()
  {
    await this.action.elementClick(this.ClickSubmitButton); 
    await this.action.elementVisible(this.Respond); 
    await this.action.getLink(this.LinK); 
  }
  async NavigatetoXMLlink()
  {
    await this.action.elementVisible(this.LinK);
    await this.action.waitForTime(5000);
  }
  async CloseLinkgenerator()
  {
    await this.action.elementClick(this.LinK);
  }
 
  ///// Step 1 
  async clicknocon()
  {
    await this.action.elementClick(this.nocon);
  }
  async reviewIsVisible()
  {        
    await this.action.ElementPresentOrNot(this.review);
  }
  async clickreviewclk()
  {
    await this.action.elementClick(this.reviewclk);
  }
  async verifyarticletitleIsVisible()
  {        
    await this.action.elementVisible(this.verifyarticletitle);
  }
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
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
    await this.action.elementClick(this.verify);
  }
  async NextIsVisible()
  {        
    await this.action.ElementPresentOrNot(this.Next);
  }
  async clickNext()
  {
    await this.action.elementClick(this.Next);
  }
  async wait(){
  await this.action.waitTime(this.timewait);
  }

///// Step 2 -----
  async verifiedack1rsIsVisible()
  {        
    await this.action.elementVisible(this.verifiedack1);
  }
  async clickerrorfm()
  {
    await this.action.elementClick(this.errorfm);
  }
  async Frontcontent()
  {        
    await this.action.elementVisible(this.Frontmattercontent);
  }
  async clickverified1()
  {
    await this.action.elementClick(this.verified1);
  }
  async clickerrortb()
  {
    await this.action.elementClick(this.errortb);
  }
  async tablecontent()
  {        
    await this.action.elementVisible(this.Tablecontent);
  }
  async clickverified2()
  {
    await this.action.elementClick(this.verified2);
  }
  async Next2IsVisible()
  {        
    await this.action.ElementPresentOrNot(this.Next2);
  }
  async clickNextstep2()
  {
    await this.action.elementClick(this.Nextstep2);
  }
  async wait(){
    await this.action.waitTime(this.waittime2);
  }

///// Step 3 --------
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
  async cancelsymbol()
  {
    await this.action.elementClick(this.clickstep3ack1);
    await this.action.iterationkeyAction(this.leftArrow,this.arrowno1)
    await this.action.waitForTime(5000);
    await this.action.iterationkeyAction(this.backspace,this.deleteno)
    await this.action.waitForTime(5000);
  }
  async clickCorrected()
  {
    await this.action.elementClick(this.Corrected);
  }
  async clickDisplaymath()
  {
    await this.action.elementVisible(this.Displaymath);
  }
  async clickCorrected2()
  {
    await this.action.elementClick(this.Corrected);

  }
  async clickFulltext()
  {
    await this.action.elementVisible(this.Fulltext);
  }
  async clickCorrected3()
  {
    await this.action.elementClick(this.Corrected);
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
    await this.action.elementVisible(this.Corrected);
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
    await this.action.elementClick(this.Corrected);
  }
  async clickAuthorEditorsurname1()
  {
    await this.action.elementVisible(this.AuthorEditorsurname1);
  }
  async clickCorrected5()
  {
    await this.action.elementClick(this.Corrected);
  }
  async clickGraphicalabstract()
  {
    await this.action.elementVisible(this.Graphicalabstract);
  }
  async clickCorrected6()
  {
    await this.action.elementClick(this.Corrected);
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
    await this.action.elementClick(this.Corrected);
  }
  async clickUnlistedcrossref()
  {
    await this.action.elementVisible(this.Unlistedcrossref);
  }
  async clickCorrected9()
  {
    await this.action.elementClick(this.Corrected);
  }
  async clickSupportinglink()
  {
    await this.action.elementVisible(this.Supportinglink);
  }
  async clickCorrected10()
  {
    await this.action.elementClick(this.Corrected);
  }
  async clickauthorwithoutsurname()
  {
    await this.action.elementVisible(this.authorwithoutsurname);
  }
  async clickCorrected11()
  {
    await this.action.elementClick(this.Corrected);
  }
  async clickInconsistentauthorname1()
  {
    await this.action.elementVisible(this.Inconsistentauthorname1);
  }
  async clickCorrected12()
  {
    await this.action.elementClick(this.Corrected);
  }
  async clickAuthorEditorsurname2()
  {
    await this.action.elementVisible(this.AuthorEditorsurname2);
  }
  async clickCorrected13()
  {
    await this.action.elementClick(this.Corrected);
  }
  async clickInconsistentauthorname2()
  {
    await this.action.elementVisible(this.Inconsistentauthorname2);
  }
  async clickCorrected14()
  {
    await this.action.elementClick(this.Corrected);
  }
  async clickbibreferenceidbib24()
  {
    await this.action.elementVisible(this.bibreferenceidbib24);
  }
  async clickCorrected15()
  {
    await this.action.elementClick(this.ignore);
  }
  async clickbibreferenceidbib25()
  {
    await this.action.elementVisible(this.bibreferenceidbib25);
  }
  async clickCorrected16()
  {
    await this.action.elementClick(this.ignore);
  }
  async clickbibreferenceidbib26()
  {
    await this.action.elementVisible(this.bibreferenceidbib26);
  }
  async clickCorrected17()
  {
    await this.action.elementClick(this.ignore);
  }
  async clickbibreferenceidbib27()
  {
    await this.action.elementVisible(this.bibreferenceidbib27);
  }
  async clickCorrected18()
  {
    await this.action.elementClick(this.ignore);
  }
  async clickbibreferenceidbib28()
  {
    await this.action.elementVisible(this.bibreferenceidbib28);
  }
  async clickCorrected19()
  {
    await this.action.elementClick(this.ignore);
  }
  async clickbibreferenceidbib29()
  {
    await this.action.elementVisible(this.bibreferenceidbib29);
  }
  async clickCorrected20()
  {
    await this.action.elementClick(this.ignore);
  }
  async clickbibreferenceidbib34()
  {
    await this.action.elementVisible(this.bibreferenceidbib34);
  }
  async clickCorrected21()
  {
    await this.action.elementClick(this.ignore);
  }
  async clickvalidate()

  {
    await this.action.ElementPresentOrNot(this.validate);
    await this.action.elementClick(this.validate);
    await this.action.waitForTime(5000);
  }

////// User able to Submit 
  async submitIsVisible()
  {
    await this.action.waitForTime(20000);
    await this.action.waitForTime(10000);
    await this.action.ElementPresentOrNot(this.submit);
  }
  async clickSubmit()
  {
    await this.action.elementClick(this.submit);
    await this.action.waitForTime(20000);
  }
  async Waitforload()
  {
    await this.action.waitForTime(10000)
    await this.action.waitForTime(20000)
    await this.action.waitForTime(10000)
  }
  async AftersubmittedUI()
  {
    await this.action.elementVisible(this.submittedtext);
    await this.action.ElementPresentOrNot(this.submittedtext);
  }   
  
}

