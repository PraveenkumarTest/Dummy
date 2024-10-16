import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';
import { BeforeAll } from '@cucumber/cucumber';

const { Given, When, Then , And } = createBdd(test);

Given('I want to open the application url page', async () => {
    //await editorsPage.openUrl();
});
////// Step 1
When('Click on Continue option', async ({ editorsPage }) => {
    await editorsPage.clicknocon();
});
Then('the Review parastyle label be visible', async ({ editorsPage }) => {
    await editorsPage.reviewIsVisible();
});

 Then('Click on Review the parastyle Articletitle option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk(); 
});

Then('verify whether the parastyle Artice is present', async ({ editorsPage }) => {
    await editorsPage.verifyarticletitleIsVisible();    
});
Then('Click on verified1 button', async ({ editorsPage }) => {
    await editorsPage.clickverify();
});
Then('Click on Review the parastyle authors option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk2();
});
Then('verify whether the parastyle Author is present', async ({ editorsPage }) => {
    await editorsPage.verifyAuthoursIsVisible();
});
Then('Click on verified2 button', async ({ editorsPage }) => {
    await editorsPage.clickverify2(); 
});
Then('Click on Review the parastyle correspondingauthor option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk3();
});
Then('verify whether the parastyle correspondingauthor is present', async ({ editorsPage }) => {
    await editorsPage.verifycorrespondingauthorsIsVisible();
});
Then('Click on verified3 button', async ({ editorsPage }) => {
    await editorsPage.clickverify3();  
});
Then('Click on Review the parastyle e-mail option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk4();
});
Then('verify whether the parastyle e-mail is present', async ({ editorsPage }) => {
    await editorsPage.verifycorrespondingauthorsIsVisible();
});
Then('Click on verified4 button', async ({ editorsPage }) => {
    await editorsPage.clickverify4(); 
});
Then('Click on Review the parastyle dummy1 option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk5();
});
Then('verify whether the parastyle dummy1 is present', async ({ editorsPage }) => {
    await editorsPage.verifydummy1sIsVisible();
});
Then('Click on verified5 button', async ({ editorsPage }) => {
    await editorsPage.clickverify5(); 
});
Then('Click on Review the parastyle abstract option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk6();
});
Then('verify whether the parastyle abstract is present', async ({ editorsPage }) => {
    await editorsPage.verifyabstract1sIsVisible();
});
Then('Click on verified6 button', async ({ editorsPage }) => {
    await editorsPage.clickverify6(); 
});
Then('Click on Review the parastyle dummy2 option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk7();
});
Then('verify whether the parastyle dummy2 is present', async ({ editorsPage }) => {
    await editorsPage.verifydummy21sIsVisible();
});
Then('Click on verified7 button', async ({ editorsPage }) => {
    await editorsPage.clickverify7(); 
});
Then('Click on Review the parastyle paragraph1 option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk8();
});
Then('verify whether the parastyle paragraph1 is present', async ({ editorsPage }) => {
    await editorsPage.verifyparagraph1sIsVisible();
});
Then('Click on verified8 button', async ({ editorsPage }) => {
    await editorsPage.clickverify8(); 
});
Then('Click on Review the parastyle paragraph2 option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk9();
});
Then('verify whether the parastyle paragraph2 is present', async ({ editorsPage }) => {
    await editorsPage.verifyparagraph2sIsVisible();
});
Then('Click on verified9 button', async ({ editorsPage }) => {
    await editorsPage.clickverify9(); 
});
Then('Click on Review the parastyle dummy3 option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk10();
});
Then('verify whether the parastyle dummy3 is present', async ({ editorsPage }) => {
    await editorsPage.verifydummy3sIsVisible();
});

Then('Click on verified10 button', async ({ editorsPage }) => {
    await editorsPage.clickverify10(); 
});
Then('Click on Review the parastyle sectiona option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk11();
});
Then('verify whether the parastyle sectiona is present', async ({ editorsPage }) => {
    await editorsPage.verifysectionaIsVisible();
});
Then('Click on verified11 button', async ({ editorsPage }) => {
    await editorsPage.clickverify11(); 
});
Then('Click on Review the parastyle paragraph3 option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk12();
});
Then('verify whether the parastyle paragraph3 is present', async ({ editorsPage }) => {
    await editorsPage.verifyparagraph3IsVisible();
});
Then('Click on verified12 button', async ({ editorsPage }) => {
    await editorsPage.clickverify12(); 
});
Then('Click on Review the parastyle dummy4 option', async ({ editorsPage }) => {
    await editorsPage.clickreviewclk13();
});
Then('verify whether the parastyle dummy4 is present', async ({ editorsPage }) => {
    await editorsPage.verifydummy4IsVisible();
});
Then('Click on verified13 button', async ({ editorsPage }) => {
    await editorsPage.clickverify13();
});
Then('the Next button is visible', async ({ editorsPage }) => {
    await editorsPage.NextIsVisible();
});
Then('Click on Step1 next button', async ({ editorsPage }) => {
    await editorsPage.clickNext();
});

/////// Step 2 ---------
Then('verify step2 acknowledged are displayed', async ({ editorsPage }) => {
    await editorsPage.verifiedack1rsIsVisible();
});

Then('Click on Review the front matter content', async ({ editorsPage }) => {
    await editorsPage.clickerrorfm();
});
Then('Click on verified14 button', async ({ editorsPage }) => {
    await editorsPage.clickverified1();
});
Then('Click on Review the content in Table 1', async ({ editorsPage }) => {
    await editorsPage.clickerrortb();
});
Then('Click on verified15 button', async ({ editorsPage }) => {
    await editorsPage.clickverified2();
});
Then('the Next step2 button is visible', async ({ editorsPage }) => {
    await editorsPage.Next2IsVisible();
});
Then('Click on Next step2 button', async ({ editorsPage }) => {
    await editorsPage.clickNextstep2();
});

///// Step 3 
Then('verify step3 acknowledged are displayed', async ({ editorsPage }) => {
    await editorsPage.verifiedack2sIsVisible();
});

Then('move and delete text', async ({ editorsPage }) => {
    await editorsPage.ArrowandDelaction();
});
When('click on partial text in step3', async ({ editorsPage }) => {
    await editorsPage.clickclickpxt();
});
Then('click on equation', async ({ editorsPage }) => {
    await editorsPage.eqaIsVisible();
});
Then('click on inputtext', async ({ editorsPage }) => {
    await editorsPage.cursoroneqn();
});
Then('perform an keyboardact', async ({ editorsPage }) => {
    await editorsPage.BackspaceKey();
    await editorsPage.Copytxt();
});
Then('Add text as input', async ({ editorsPage }) => {
    await editorsPage.Filltext();
    await editorsPage.Pastetxt();
});
Then('Add Math update button', async ({ editorsPage }) => {
    await editorsPage.clickUpdate();
});
Then('click text on Math', async ({ editorsPage }) => {
    await editorsPage.cursrmath();
});
Then('click Corrected1 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected();
});
Then('Click on Displaymath has inlinegraphics', async ({ editorsPage }) => {
    await editorsPage.clickDisplaymath();
});
Then('Click on Corrected2 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected2();
});
Then('Click on Full text', async ({ editorsPage }) => {
    await editorsPage.clickFulltext();
});
Then('Click on Corrected3 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected3();
});
// -------------------------------------

When('click on fnm element error', async ({ editorsPage }) => {
    await editorsPage.clickerrorfnm();
});
Then('select an firstname text', async ({ editorsPage }) => {
    await editorsPage.Selectionfn();
});
Then('verify editcontainer are visible', async ({ editorsPage }) => {
    await editorsPage.Dropcon();
});
When('click editor search', async ({ editorsPage }) => {
    await editorsPage.clicksearch();
});
Then('select an fnm', async ({ editorsPage }) => {
    await editorsPage.selectsnm();
});
Then('click and change into snm', async ({ editorsPage }) => {
    await editorsPage.changesnm();   
});
When ('select an particular text as comma', async ({ editorsPage }) => {
    await editorsPage.Selectionsnm();
});
Then('Dropdown to change the text', async ({ editorsPage }) => {
    await editorsPage.commaasx();
});
Then('verfiy edit form are visible', async ({ editorsPage }) => {
    await editorsPage.EditformVisible();
});
Then('Fill and change as X', async ({ editorsPage }) => {
    await editorsPage.FillandclickX();
});
Then('select the space and dropdown to change', async ({ editorsPage }) => {
    await editorsPage.Selectionspacex();
});
Then('verify and click on editor and editor form are visible', async ({ editorsPage }) => {
    await editorsPage.ClickandEditformVisible();
});
Then('Fill and Update space content', async ({ editorsPage }) => {
    await editorsPage.Filltextandupdate();
});
Then('the correction change as corrected', async ({ editorsPage }) => {
    await editorsPage.MarkCorrected();
});


Then('Click AuthorEditor surname is missing. Check and correct.', async ({ editorsPage }) => {
    await editorsPage.clickAuthorEditorsurname1();
});
Then('Click on Corrected5 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected5();
});
Then('Graphical abstract missing in file', async ({ editorsPage }) => {
    await editorsPage.clickGraphicalabstract();
});
Then('Click on Corrected6 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected6();
});

When('place cursor on Keywords text and press Enter', async ({ editorsPage }) => {
    await editorsPage.keywordsdefault();
});
Then('Select keywords letter and deselect', async ({ editorsPage }) => {
    await editorsPage.Selectkeywordstext();
}); 
Then('Use keyboard action Ctrl+Space to Change text as destyle', async ({ editorsPage }) => {
    await editorsPage.UseKeyboardaction();
});
Then('change keywords as xpara', async ({ editorsPage }) => {
  await editorsPage.ChangeXpara();
});
Then('Insert Xpara', async ({ editorsPage }) => {
    await editorsPage.clickxparatochange();
});
Then('click and Mark as corrected', async ({ editorsPage }) => {
    await editorsPage.Markascorrected();
});
Then('Please check Unlisted cross-ref link tblS1.', async ({ editorsPage }) => {
    await editorsPage.clickUnlistedcrossref();
});
Then('Click on Corrected9 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected9();
});
Then('Supporting link is missing or incorrect. Please check.', async ({ editorsPage }) => {
    await editorsPage.clickSupportinglink();
});
Then('Click on Corrected10 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected10();
});
Then('Please check author without surname', async ({ editorsPage }) => {
    await editorsPage.clickauthorwithoutsurname();
});
Then('Click on Corrected11 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected11();
});
Then('Inconsistent1 author name pattern, please check.', async ({ editorsPage }) => {
    await editorsPage.clickInconsistentauthorname1();
});
Then('Click on Corrected12 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected12();
});
Then('AuthorEditor surname is missing. Check and correct.', async ({ editorsPage }) => {
    await editorsPage.clickAuthorEditorsurname2();
});
Then('Click on Corrected13 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected13();
});
Then('Inconsistent2 author name pattern, please check.', async ({ editorsPage }) => {
    await editorsPage.clickInconsistentauthorname2();
});
Then('Click on Corrected14 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected14();
});
Then('Check the uncited reference, bibreference id bib24.', async ({ editorsPage }) => {
    await editorsPage.clickbibreferenceidbib24();
});
Then('Click on Corrected15 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected15();
});
Then('Check the uncited reference, bibreference id bib25.', async ({ editorsPage }) => {
    await editorsPage.clickbibreferenceidbib25();
});
Then('Click on Corrected16 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected16();
});
Then('Check the uncited reference, bibreference id bib26.', async ({ editorsPage }) => {
    await editorsPage.clickbibreferenceidbib26();
});
Then('Click on Corrected17 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected17();
});
Then('Check the uncited reference, bibreference id bib27.', async ({ editorsPage }) => {
    await editorsPage.clickbibreferenceidbib27();
});
Then('Click on Corrected18 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected18();
});
Then('Check the uncited reference, bibreference id bib28.', async ({ editorsPage }) => {
    await editorsPage.clickbibreferenceidbib28();
});
Then('Click on Corrected19 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected19();
});
Then('Click the uncited reference, bib-reference id bib29.', async ({ editorsPage }) => {
    await editorsPage.clickbibreferenceidbib29();
});
Then('Click on Corrected20 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected20();
});
Then('Click the uncited reference, bibreference id bib34.', async ({ editorsPage }) => {
    await editorsPage.clickbibreferenceidbib34();
});
Then('Click on Corrected21 button', async ({ editorsPage }) => {
    await editorsPage.clickCorrected21();
});
Then('Click the validate button', async ({ editorsPage }) => {
    await editorsPage.clickvalidate();
});
///// Submit
Then('verify the submit button are present', async ({ editorsPage }) => {
    await editorsPage.submitIsVisible();
});
Then('click submit button', async ({ editorsPage }) => {
    await editorsPage.clickSubmit();
});
Then('verify after submitted UI text are present in submitted mode', async ({ editorsPage }) => {
    await editorsPage.AftersubmittedUI();
});
