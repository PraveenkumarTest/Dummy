//import { Given, When, Then } from 'cucumber'; // Ensure you import these from cucumber
import { test } from '../fixtures/fixtures'; // Import your test and fixtures
// import { test } from '@playwright/test'; // Import the test object if needed
import { createBdd } from 'playwright-bdd'; // Import createBdd for BDD support
import { editorPage } from '../pages/editorPage';  // Import your page object
import { actionAndAssertion } from '../utils/actionsAndAssertion';  // Import the window utility
import { sharedPage } from '../fixtures/fixtures';

require('dotenv').config({ path: 'D:/XML-Reg2/XML_BDD_UI/env/.env.qa' });

let parentPage;
let childPage; // Variable to hold the child page
let pageObject;

// If you're using createBdd, you might want to wrap your definitions

const { Given, When, Then } = createBdd(test);


Then('I open the parent page', async function ({ editorsPage }) {
    // Create a new browser context and open the parent window
    //console.log('Parent page opened:', editorsPage.url());
});
///// Link Generation
When('User can add JID', async ({ editorsPage }) => {
    await editorsPage.TypeJid();
});
Then('User can add AID', async ({ editorsPage }) => {
    await editorsPage.TypeAid();
});
Then('upload tud xml input', async ({ editorsPage }) => {
    await editorsPage.Uploadtud();
});
Then('upload json file', async ({ editorsPage }) => {
    await editorsPage.UPloadJson();
});
When('click submit button for Link Generation', async ({ editorsPage }) => {
    await editorsPage.Submitclick();
});
Then('Verify on href tag into XML Central Link', async ({ editorsPage }) => {
    await editorsPage.NavigatetoXMLlink();
});
Then('close the xml generate link', async ({ editorsPage }) => {
    await editorsPage.CloseLinkgenerator();
});



////// Step 1
// Step to switch to the child tab and close the parent tab
When('I switch to the child page and close the parent', async function () {
    const action = new actionAndAssertion(sharedPage); // Initialize WindowUtils with the parent page
    childPage = await action.closeParentAndContinueActions(process.env.URL2); // Open the child page and close parent
     pageObject = new editorPage(childPage);
    
});

When('Click on Continue option', async ({ editorsPage }) => {
    await pageObject.clicknocon();
});
Then('the Review parastyle label be visible', async ({ editorsPage }) => {
    await pageObject.reviewIsVisible();
});
Then('Files are moved', async ({ editorsPage }) => {
    await pageObject.movedfiles();
});

 Then('Click on Review the parastyle Articletitle option', async ({ editorsPage }) => {   
    await pageObject.clickreviewclk(); 
});
Then('verify whether the parastyle Artice is present', async ({ editorsPage }) => {
    await pageObject.verifyarticletitleIsVisible();    
});
Then('Click on verified1 button', async ({ editorsPage }) => {
    await pageObject.clickverify();
});


Then('Click on Review the parastyle authors option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk2();
});
Then('verify whether the parastyle Author is present', async ({ editorsPage }) => {
    await pageObject.verifyAuthoursIsVisible();
});
Then('Click on verified2 button', async ({ editorsPage }) => {
    await pageObject.clickverify2(); 
});


Then('Click on Review the parastyle correspondingauthor option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk3();
});
Then('verify whether the parastyle correspondingauthor is present', async ({ editorsPage }) => {
    await pageObject.verifycorrespondingauthorsIsVisible();
});
Then('Click on verified3 button', async ({ editorsPage }) => {
    await pageObject.clickverify3();  
});


Then('Click on Review the parastyle e-mail option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk4();
});
Then('verify whether the parastyle e-mail is present', async ({ editorsPage }) => {
    await pageObject.verifyemailsIsVisible();
});
Then('Click on verified4 button', async ({ editorsPage }) => {
    await pageObject.clickverify4(); 
});
Then('Click on Review the parastyle dummy1 option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk5();
});
Then('verify whether the parastyle dummy1 is present', async ({ editorsPage }) => {
    await pageObject.verifydummy1sIsVisible();
});
Then('Click on verified5 button', async ({ editorsPage }) => {
    await pageObject.clickverify5(); 
});
Then('Click on Review the parastyle abstract option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk6();
});
Then('verify whether the parastyle abstract is present', async ({ editorsPage }) => {
    await pageObject.verifyabstract1sIsVisible();
});
Then('Click on verified6 button', async ({ editorsPage }) => {
    await pageObject.clickverify6(); 
});
Then('Click on Review the parastyle dummy2 option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk7();
});
Then('verify whether the parastyle dummy2 is present', async ({ editorsPage }) => {
    await pageObject.verifydummy21sIsVisible();
});
Then('Click on verified7 button', async ({ editorsPage }) => {
    await pageObject.clickverify7(); 
});
Then('Click on Review the parastyle paragraph1 option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk8();
});
Then('verify whether the parastyle paragraph1 is present', async ({ editorsPage }) => {
    await pageObject.verifyparagraph1sIsVisible();
});
Then('Click on verified8 button', async ({ editorsPage }) => {
    await pageObject.clickverify8(); 
});
Then('Click on Review the parastyle paragraph2 option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk9();
});
Then('verify whether the parastyle paragraph2 is present', async ({ editorsPage }) => {
    await pageObject.verifyparagraph2sIsVisible();
});
Then('Click on verified9 button', async ({ editorsPage }) => {
    await pageObject.clickverify9(); 
});
Then('Click on Review the parastyle dummy3 option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk10();
});
Then('verify whether the parastyle dummy3 is present', async ({ editorsPage }) => {
    await pageObject.verifydummy3sIsVisible();
});

Then('Click on verified10 button', async ({ editorsPage }) => {
    await pageObject.clickverify10(); 
});
Then('Click on Review the parastyle sectiona option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk11();
});
Then('verify whether the parastyle sectiona is present', async ({ editorsPage }) => {
    await pageObject.verifysectionaIsVisible();
});
Then('Click on verified11 button', async ({ editorsPage }) => {
    await pageObject.clickverify11(); 
});
Then('Click on Review the parastyle paragraph3 option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk12();
});
Then('verify whether the parastyle paragraph3 is present', async ({ editorsPage }) => {
    await pageObject.verifyparagraph3IsVisible();
});
Then('Click on verified12 button', async ({ editorsPage }) => {
    await pageObject.clickverify12(); 
});
Then('Click on Review the parastyle dummy4 option', async ({ editorsPage }) => {
    await pageObject.clickreviewclk13();
});
Then('verify whether the parastyle dummy4 is present', async ({ editorsPage }) => {
    await pageObject.verifydummy4IsVisible();
});
Then('Click on verified13 button', async ({ editorsPage }) => {
    await pageObject.clickverify13();
});
Then('the Next button is visible', async ({ editorsPage }) => {
    await pageObject.NextIsVisible();
});
Then('Click on Step1 next button', async ({ editorsPage }) => {
    await pageObject.clickNext();
});

/////// Step 2 ---------
When('verify step2 acknowledged are displayed', async ({ editorsPage }) => {
    await pageObject.verifiedack1rsIsVisible();
});
Then('Click on Review the front matter content', async ({ editorsPage }) => {
    await pageObject.clickerrorfm();
});
Then('verify front matter content is visible', async ({ editorsPage }) => {
    await pageObject.Frontcontent();
});

Then('Click on verified14 button', async ({ editorsPage }) => {
    await pageObject.clickverified1();
});
When('Click on Review the content in Table 1', async ({ editorsPage }) => {
    await pageObject.clickerrortb();
});
Then('verify teblecontent are visible', async ({ editorsPage }) => {
    await pageObject.tablecontent();
});
Then('Click on verified15 button', async ({ editorsPage }) => {
    await pageObject.clickverified2();
});
Then('the Next step2 button is visible', async ({ editorsPage }) => {
    await pageObject.Next2IsVisible();
});
Then('Click on Next step2 button', async ({ editorsPage }) => {
    await pageObject.clickNextstep2();
});

///// Step 3 

Then('verify step3 acknowledged are displayed', async ({ editorsPage }) => {
    await pageObject.verifiedack2sIsVisible();
});

///partial text
Then('move and delete text', async ({ editorsPage }) => {
    await pageObject.ArrowandDelaction();
});
When('click on partial text in step3', async ({ editorsPage }) => {
    await pageObject.clickclickpxt();
});
Then('click on Edit icon', async ({ editorsPage }) => {
    await pageObject.ClickEditicn();
});
When('click and verify on equation is visible', async ({ editorsPage }) => {
    await pageObject.eqaIsVisible();
});
Then('click on inputtext', async ({ editorsPage }) => {
    await pageObject.cursoroneqn();
});
Then('perform an keyboardact', async ({ editorsPage }) => {
    await pageObject.BackspaceKey();
    await pageObject.Copytxt();
});
Then('Add text as input', async ({ editorsPage }) => {
    await pageObject.Filltext();
    await pageObject.Pastetxt();
});
Then('Add Math update button', async ({ editorsPage }) => {
    await pageObject.clickUpdate();
});
Then('click text on Math', async ({ editorsPage }) => {
    await pageObject.cursrmath();
});
Then('Delete an Extra Symbol add in Math', async ({ editorsPage }) => {
    await pageObject.cancelsymbol();
});
Then('click Corrected1 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected();
});

/// Displaymath has inlinegraphics
Then('verify Displaymath has inlinegraphics', async ({ editorsPage }) => {
    await pageObject.clickDisplaymath();
});
Then('Click on Corrected2 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected2();
});

/// Full text
Then('verify Full text are correctly in UI', async ({ editorsPage }) => {
    await pageObject.clickFulltext();
});
Then('Click on Corrected3 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected3();
});

/// fnm element can not have , 'comma'
When('click on fnm element error', async ({ editorsPage }) => {
    await pageObject.clickerrorfnm();
});
Then('select an firstname text', async ({ editorsPage }) => {
    await pageObject.Selectionfn();
});
Then('verify editcontainer are visible', async ({ editorsPage }) => {
    await pageObject.Dropcon();
});
When('click editor search', async ({ editorsPage }) => {
    await pageObject.clicksearch();
});
Then('select an fnm', async ({ editorsPage }) => {
    await pageObject.selectsnm();
});
Then('click and change into snm', async ({ editorsPage }) => {
    await pageObject.changesnm();   
});
When ('select an particular text as comma', async ({ editorsPage }) => {
    await pageObject.Selectionsnm();
});
Then('Dropdown to change the text', async ({ editorsPage }) => {
    await pageObject.commaasx();
});
Then('verfiy edit form are visible', async ({ editorsPage }) => {
    await pageObject.EditformVisible();
});
Then('Fill and change as X', async ({ editorsPage }) => {
    await pageObject.FillandclickX();
});
// Then('select the space and dropdown to change', async ({ editorsPage }) => {
//     await pageObject.Selectionspacex();
// });
// Then('verify and click on editor and editor form are visible', async ({ editorsPage }) => {
//     await pageObject.ClickandEditformVisible();
// });
// Then('Fill and Update space content', async ({ editorsPage }) => {
//     await pageObject.Filltextandupdate();
// });
Then('the correction change as corrected', async ({ editorsPage }) => {
    await pageObject.MarkCorrected();
});

/// Author/Editor surname is missing. Check and correct.
Then('Click AuthorEditor surname is missing. Check and correct.', async ({ editorsPage }) => {
    await pageObject.clickAuthorEditorsurname1();
});
Then('Click on Corrected5 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected5();
});

/// Change the UI View
Then('click on view button', async ({ editorsPage }) => {
    await pageObject.Clickviewbutton();
});
Then('unclick an parastylelabel', async ({ editorsPage }) => {
    await pageObject.Unclickparastyle();
});
Then('unclick an Inlinecolour', async ({ editorsPage }) => {
    await pageObject.UnclickInlinecolour();
});
Then('unclick an Nonprintingchar', async ({ editorsPage }) => {
    await pageObject.UnclickNonprintingchar();
});
Then('unclick an coversheet', async ({ editorsPage }) => {
    await pageObject.Unclickcoversheet();
});


//---btl 
When('Select an btl text', async ({ editorsPage }) => {
    await pageObject.Selectbtl();
});
Then('change btl text as article', async ({ editorsPage }) => {
    await pageObject.Inputbtl();
});
Then('Click on corrected button are below', async ({ editorsPage }) => {
    await pageObject.Fillandclickatl();
});

// ---Formatting bold to unbold
When('select an bold text in refernce', async ({ editorsPage }) => {
    await pageObject.Selectboldtext();
});
Then('click on unbold button', async ({ editorsPage }) => {
    await pageObject.Clickunbold();
});
Then('click Corrected button', async ({ editorsPage }) => {
    await pageObject.checkandcorrect();
});



// ---Alert check Formatting bold is present
When('check the alert message of incorrect format bold is present', async ({ editorsPage }) => {
    await pageObject.CheckBoldformat();
});
Then('Check and click Corrected button below', async ({ editorsPage }) => {
    await pageObject.Checkandcorrected();
});

// ---Formatting italic to unitalic
When('select an italic text in refernce', async ({ editorsPage }) => {
    await pageObject.Selectitalictext();
});
Then('click on Unitalic button', async ({ editorsPage }) => {
    await pageObject.Clickunitalic();
});
Then('click the Corrected button', async ({ editorsPage }) => {
    await pageObject.checkandcorrect2();
});

// ---Alert check Formatting italic is present
When('check the alert message of incorrect format italic is present', async ({ editorsPage }) => {
    await pageObject.CheckItalicformat();
});
Then('Check and click Corrected button are below', async ({ editorsPage }) => {
    await pageObject.Checkandcorrected3();
});


// ---Incorrect format 'underline' is present
When('check whether underline are present in refernce', async ({ editorsPage }) => {
    await pageObject.SelectUnderlinetext();
});
Then('change the underline into normal style', async ({ editorsPage }) => {
    await pageObject.ClickUnunderline();
});
Then('click lastly corrected button', async ({ editorsPage }) => {
    await pageObject.checkandcorrectA();
});


// ---Incorrect format 'superscript' is present.
When('verify wether superscript is present or not', async ({ editorsPage }) => {
    await pageObject.Selectsuperscripttext();
});
Then('chnge the superscript into normal style', async ({ editorsPage }) => {
    await pageObject.ClickUnsuperscript();
});
Then('click an lastly corrected button', async ({ editorsPage }) => {
    await pageObject.checkandcorrectB();
});


// ---Alert message Incorrect style 'pubmedcheck1' is present.
When('check and verify again pubmedcheck1 are present', async ({ editorsPage }) => {
    await pageObject.clickpubmedcheck1();
});
Then('check and verify correct button', async ({ editorsPage }) => {
    await pageObject.clickCorrectedC();
});


// ---Incorrect format 'subscript' is present.
When('verify wether Subscript is present or not', async ({ editorsPage }) => {
    await pageObject.SelectSubscripttext();
});
Then('chnge the Subscript into normal style', async ({ editorsPage }) => {
    await pageObject.ClickUnSubscript();
});
Then('click an last corrected button', async ({ editorsPage }) => {
    await pageObject.checkandcorrectD();
});


// ---Alert message Incorrect style 'pubmedcheck2' is present.
When('check and verify again pubmedcheck2 are present', async ({ editorsPage }) => {
    await pageObject.clickpubmedcheck2();
});
Then('check and verify corrected button', async ({ editorsPage }) => {
    await pageObject.clickCorrectedE();
});


/// Graphical abstract missing in file
Then('Verify Graphical abstract missing in file', async ({ editorsPage }) => {
    await pageObject.clickGraphicalabstract();
});
Then('Click on Corrected6 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected6();
});


/// Incorrect style 'e-address' is present. Check and correct.
When('Click on ORCID in AUTHORS', async ({ editorsPage }) => {
    await pageObject.Clickoricd();
});
Then('xref popup should be visible', async ({ editorsPage }) => {
    await pageObject.Xrefvisible();
});
Then('Unclick an superscript button and corrected', async ({ editorsPage }) => {
    await pageObject.Changesuperscript();
});


/// Affiliation text should be structured. Please check and correct.
When('Affiliation text should be check and select', async ({ editorsPage }) => {
    await pageObject.Selectaffiliation();
});
Then('change the nomal text to Affiliation text by affnadd', async ({ editorsPage }) => {
    await pageObject.Inputchangeaffnadd();
});
Then('check and click corrected button', async ({ editorsPage }) => {
    await pageObject.Fillasaffnadd();
});


/// Check and verify Incorrect style 'stl' is present. Check and correct.
When('Select incoorect style stl text', async ({ editorsPage }) => {
    await pageObject.SelectstlText();
});
Then('Change into st style', async ({ editorsPage }) => {
    await pageObject.Inputchangest();
});
Then('Click the text corrected button', async ({ editorsPage }) => {
    await pageObject.Fillascorrected();
});


///// Title not allowed for Keywords.
When('place cursor on Keywords text and press Enter', async ({ editorsPage }) => {
    await pageObject.keywordsdefault();
});
Then('Select keywords letter and deselect', async ({ editorsPage }) => {
    await pageObject.Selectkeywordstext();
}); 
Then('Use keyboard action Ctrl+Space to Change text as destyle', async ({ editorsPage }) => {
    await pageObject.UseKeyboardaction();
});
Then('change keywords as xpara', async ({ editorsPage }) => {
  await pageObject.ChangeXpara();
});
Then('Insert Xpara', async ({ editorsPage }) => {
    await pageObject.clickxparatochange();
});
Then('click and Mark as corrected', async ({ editorsPage }) => {
    await pageObject.Markascorrected();
});


/// Change the UI View
Then('click on view button back', async ({ editorsPage }) => {
    await pageObject.Clickviewbutton1();
});
Then('click an parastylelabel back', async ({ editorsPage }) => {
    await pageObject.Unclickparastyle1();
});
Then('click an Inlinecolour back', async ({ editorsPage }) => {
    await pageObject.UnclickInlinecolour1();
});
Then('click an Nonprintingchar back', async ({ editorsPage }) => {
    await pageObject.UnclickNonprintingchar1();
});
Then('click an coversheet back', async ({ editorsPage }) => {
    await pageObject.Unclickcoversheet1();
});


/// Please check Unlisted cross-ref link tblS1.
Then('Verify Please check Unlisted cross-ref link tblS1.', async ({ editorsPage }) => {
    await pageObject.clickUnlistedcrossref();
});
Then('Click on Corrected9 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected9();
});

/// Supporting link is missing or incorrect. Please check.
Then('Verify Supporting link is missing or incorrect. Please check.', async ({ editorsPage }) => {
    await pageObject.clickSupportinglink();
});
Then('Click on Corrected10 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected10();
});

/// Please check author without surname
Then('Verify Please check author without surname', async ({ editorsPage }) => {
    await pageObject.clickauthorwithoutsurname();
});
Then('Click on Corrected11 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected11();
});

/// Inconsistent author name pattern, please check.
Then('Verify Inconsistent1 author name pattern, please check.', async ({ editorsPage }) => {
    await pageObject.clickInconsistentauthorname1();
});
Then('Click on Corrected12 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected12();
});

/// Author/Editor surname is missing. Check and correct.
Then('AuthorEditor surname is missing. Check and correct.', async ({ editorsPage }) => {
    await pageObject.clickAuthorEditorsurname2();
});
Then('Click on Corrected13 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected13();
});

/// Inconsistent author name pattern, please check.
Then('Verify Inconsistent2 author name pattern, please check.', async ({ editorsPage }) => {
    await pageObject.clickInconsistentauthorname2();
});
Then('Click on Corrected14 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected14();
});

// Alert message of Incorrect style 'btl' is present. Check and correct.
When('Check alert are correct or incorrect in btl', async ({ editorsPage }) => {
    await pageObject.Clickbtlalert();
});
Then('Click on Corrected button21', async ({ editorsPage }) => {
    await pageObject.clickCorrected();
});



// Alert message of Incorrect format 'bold' is present. Check and correct.
When('Check alert message of bold format is present', async ({ editorsPage }) => {
    await pageObject.ClickBOformat();
});
Then('Click on Corrected button26', async ({ editorsPage }) => {
    await pageObject.clickCorrected();  
});


// Alert message of Incorrect format 'italic' is present. Check and correct.
When('Check alert message of italic format is present', async ({ editorsPage }) => {
    await pageObject.ClickITformat();
});
Then('Click on Corrected button27', async ({ editorsPage }) => {
    await pageObject.clickCorrected();  
});


// Alert and verify Incorrect format 'underline' is present. Check and correct.
When('Check and verify the alert of incorrect underline present', async ({ editorsPage }) => {
    await pageObject.Clickunderlineformat();
});
Then('verified and click correctedF button', async ({ editorsPage }) => {
    await pageObject.clickCorrectedF();  
});


// Alert and verify Incorrect format 'superscript' is present. Check and correct.
When('Check and verify the alert of incorrect superscript present', async ({ editorsPage }) => {
    await pageObject.ClickSuperscriptformat();
});
Then('verified and click correctedG button', async ({ editorsPage }) => {
    await pageObject.clickCorrectedG();  
});


// Alert and verify Incorrect style 'pubmedcheck3' is present. Check and correct.
When('Check and verify the alert of incorrect pubmedcheck3 present', async ({ editorsPage }) => {
    await pageObject.Clickpubmedformat();
});
Then('verified and click correctedH button', async ({ editorsPage }) => {
    await pageObject.clickCorrectedH();  
});


// Alert and verify Incorrect format 'subscript' is present. Check and correct.
When('Check and verify the alert of incorrect subscript present', async ({ editorsPage }) => {
    await pageObject.Clicksubscriptformat();
});
Then('verified and click correctedI button', async ({ editorsPage }) => {
    await pageObject.clickCorrectedI();  
});


// Alert and verify Incorrect style 'pubmedcheck4' is present. Check and correct.
When('Check and verify the alert of incorrect pubmedcheck4 present', async ({ editorsPage }) => {
    await pageObject.Clickpubmedcheck4format();
});
Then('verified and click correctedJ button', async ({ editorsPage }) => {
    await pageObject.clickCorrectedJ();  
});


///Check the uncited reference, bib-reference id 'bib24'.
Then('Verify Check the uncited reference, bibreference id bib24.', async ({ editorsPage }) => {
    await pageObject.clickbibreferenceidbib24();
});
Then('Click on Corrected15 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected15();
});

/// Check the uncited reference, bib-reference id 'bib25'.
Then('Verify Check the uncited reference, bibreference id bib25.', async ({ editorsPage }) => {
    await pageObject.clickbibreferenceidbib25();
});
Then('Click on Corrected16 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected16();
});

/// Check the uncited reference, bib-reference id 'bib26'.
Then('Verify Check the uncited reference, bibreference id bib26.', async ({ editorsPage }) => {
    await pageObject.clickbibreferenceidbib26();
});
Then('Click on Corrected17 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected17();
});

/// Check the uncited reference, bib-reference id 'bib27'.
Then('Verify Check the uncited reference, bibreference id bib27.', async ({ editorsPage }) => {
    await pageObject.clickbibreferenceidbib27();
});
Then('Click on Corrected18 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected18();
});

/// Check the uncited reference, bib-reference id 'bib28'.
Then('Verify Check the uncited reference, bibreference id bib28.', async ({ editorsPage }) => {
    await pageObject.clickbibreferenceidbib28();
});
Then('Click on Corrected19 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected19();
});

/// Check the uncited reference, bib-reference id 'bib29'.
Then('Verify Click the uncited reference, bib-reference id bib29.', async ({ editorsPage }) => {
    await pageObject.clickbibreferenceidbib29();
});
Then('Click on Corrected20 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected20();
});

/// Check the uncited reference, bib-reference id 'bib34'.
Then('Verify Click the uncited reference, bibreference id bib34.', async ({ editorsPage }) => {
    await pageObject.clickbibreferenceidbib34();
});
Then('Click on Corrected21 button', async ({ editorsPage }) => {
    await pageObject.clickCorrected21();
});

////// Skip Error
When('Xml link user able to change URL as opsHead', async ({ editorsPage }) => {
  await pageObject.SKIPERRORMode();
});
Then('Made an some correction in UI', async ({ editorsPage }) => {
    await pageObject.Somecorrection();
});
 Then('Click the validate button', async ({ editorsPage }) => {
    await pageObject.clickvalidate();
});
Then('Users able to visible skip error option is visible', async ({ editorsPage }) => {
    await pageObject.Skiperrorisvisible();
});
When('user can click skip error option', async ({ editorsPage }) => {
    await pageObject.clickskiperror();
});
Then('Dropdown reason for skip error', async ({ editorsPage }) => {
    await pageObject.Dropdowntoreason();
});
Then('click an skip error button to update', async ({ editorsPage }) => {
    await pageObject.clickskiptourupdate();
});

Then('Click Validate btn', async ({ editorsPage }) => {
    await pageObject.clickvalidatelast();
});

/// Again clear final error
When('Verify and Click final stage of 1st error', async ({ editorsPage }) => {
    await pageObject.clickfinalerrorone();
});
Then('Verify and Click final stage of 2nd error', async ({ editorsPage }) => {
    await pageObject.clickfinalerrortwo();
});
Then('Verify and Click final stage of 3rd error', async ({ editorsPage }) => {
    await pageObject.clickfinalerrorthree();
});
Then('Verify and Click final stage of 4th error', async ({ editorsPage }) => {
    await pageObject.clickfinalerrorofour();
});
Then('Verify and Click final stage of 5th error', async ({ editorsPage }) => {
    await pageObject.clickfinalerrorfive();
});
Then('Verify and Click final stage of 6th error', async ({ editorsPage }) => {
    await pageObject.clickfinalerrorsix();
});
Then('Verify and Click final stage of 7th error', async ({ editorsPage }) => {
    await pageObject.clickfinalerrorseven();
});
Then('click VALIDATE Button', async ({ editorsPage }) => {
    await pageObject.CLICKVALIDATE();
});



///// Submit
When('verify the submit button are present', async ({ editorsPage }) => {
    await pageObject.submitIsVisible();
});
Then('click submit button', async ({ editorsPage }) => {
    await pageObject.clickSubmit();
});
Then('Wait for page load to submit', async ({ editorsPage }) => {
    await pageObject.Waitforload();
});
When('verify after submitted UI text are present in submitted mode', async ({ editorsPage }) => {
    await pageObject.AftersubmittedUI();
});
Then('verify This article has been already submitted are present', async ({ editorsPage }) => {
    await pageObject.AftersubmittedverifyText();
});
When('Verify the Enable Editing button is visible', async ({ editorsPage }) => {
    await pageObject.Enableeditingbtn();
});
Then('User Can click the Enable Editing button', async ({ editorsPage }) => {
    await pageObject.ClickEnableEditing();
});
Then('Click on Proceed button to Enable', async ({ editorsPage }) => {
    await pageObject.Clickproceedbtn();
});
When('check user can able to edit after revert the submit', async ({ editorsPage }) => {
    await pageObject.elementpresentarenot();
});
// When('Select any text in UI', async ({ editorsPage }) => {    
//     await pageObject.SelectPara();
// });
// Then('click an format button', async ({ editorsPage }) => { 
//     await pageObject.ClickFormat();
// });
// Then('Check user can able to convert text as math', async ({ editorsPage }) => { 
//     await pageObject.Clickconverttomath();
// });
When('click an submit button', async ({ editorsPage }) => {
    await pageObject.SUBMITBTN();
});
Then('Check and verify This article has been already submitted are present', async ({ editorsPage }) => {
    await pageObject.AftersubmittedUi();
});

////OUT XML
Then('OUT xml are stored in XMLcentral UAT path & Moved to Testing services path to compare', async ({ editorsPage }) => {
    await pageObject.Getoutxmlcopyandmoved();
});

When('To check INxml are stored in server path are visible', async ({ editorsPage }) => {
    await pageObject.CheckIN();
});

Then('To check after submitted OUTxml are stored in server path', async ({ editorsPage }) => {
    await pageObject.Checkout();
});

When('After submitted OUTxml are compare with INxml', async ({ editorsPage }) => {
    await pageObject.ComparexmlFiles();
});

Then('Delete OUTxml in Testing path after all verified', async ({ editorsPage }) => {
    await pageObject.DeleteOUTxml();
});

