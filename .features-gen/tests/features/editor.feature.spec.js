/** Generated from: tests\features\editor.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("Application UI Validation", () => {

  test("Verify whether the link generation XML URL", async ({ Then, editorsPage, When }) => {
    await Then("I open the parent page", null, { editorsPage });
    await When("User can add JID", null, { editorsPage });
    await Then("User can add AID", null, { editorsPage });
    await Then("upload tud xml input", null, { editorsPage });
    await Then("upload json file", null, { editorsPage });
    await When("click submit button for Link Generation", null, { editorsPage });
    await Then("Verify on href tag into XML Central Link", null, { editorsPage });
    await Then("close the xml generate link", null, { editorsPage });
  });

  test("Verify whether the Acknowledged Option are displayed properly in Step1", async ({ When, editorsPage, Then }) => {
    await When("I switch to the child page and close the parent");
    await When("Click on Continue option", null, { editorsPage });
    await Then("the Review parastyle label be visible", null, { editorsPage });
    await Then("Files are moved", null, { editorsPage });
  });

  test("Verify whether the parastyle Articletitle are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle Articletitle option", null, { editorsPage });
    await Then("verify whether the parastyle Artice is present", null, { editorsPage });
    await Then("Click on verified1 button", null, { editorsPage });
  });

  test("Verify whether the parastyle authors are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle authors option", null, { editorsPage });
    await Then("verify whether the parastyle Author is present", null, { editorsPage });
    await Then("Click on verified2 button", null, { editorsPage });
  });

  test("Verify whether the parastyle correspondingauthor are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle correspondingauthor option", null, { editorsPage });
    await Then("verify whether the parastyle correspondingauthor is present", null, { editorsPage });
    await Then("Click on verified3 button", null, { editorsPage });
  });

  test("Verify whether the parastyle e-mail are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle e-mail option", null, { editorsPage });
    await Then("verify whether the parastyle e-mail is present", null, { editorsPage });
    await Then("Click on verified4 button", null, { editorsPage });
  });

  test("Verify whether the parastyle dummy1 are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle dummy1 option", null, { editorsPage });
    await Then("verify whether the parastyle dummy1 is present", null, { editorsPage });
    await Then("Click on verified5 button", null, { editorsPage });
  });

  test("Verify whether the parastyle abstract are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle abstract option", null, { editorsPage });
    await Then("verify whether the parastyle abstract is present", null, { editorsPage });
    await Then("Click on verified6 button", null, { editorsPage });
  });

  test("Verify whether the parastyle dummy2 are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle dummy2 option", null, { editorsPage });
    await Then("verify whether the parastyle dummy2 is present", null, { editorsPage });
    await Then("Click on verified7 button", null, { editorsPage });
  });

  test("Verify whether the parastyle paragraph1 are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle paragraph1 option", null, { editorsPage });
    await Then("verify whether the parastyle paragraph1 is present", null, { editorsPage });
    await Then("Click on verified8 button", null, { editorsPage });
  });

  test("Verify whether the parastyle paragraph2 are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle paragraph2 option", null, { editorsPage });
    await Then("verify whether the parastyle paragraph2 is present", null, { editorsPage });
    await Then("Click on verified9 button", null, { editorsPage });
  });

  test("Verify whether the parastyle dummy3 are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle dummy3 option", null, { editorsPage });
    await Then("verify whether the parastyle dummy3 is present", null, { editorsPage });
    await Then("Click on verified10 button", null, { editorsPage });
  });

  test("Verify whether the parastyle sectiona are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle sectiona option", null, { editorsPage });
    await Then("verify whether the parastyle sectiona is present", null, { editorsPage });
    await Then("Click on verified11 button", null, { editorsPage });
  });

  test("Verify whether the parastyle paragraph3 are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle paragraph3 option", null, { editorsPage });
    await Then("verify whether the parastyle paragraph3 is present", null, { editorsPage });
    await Then("Click on verified12 button", null, { editorsPage });
  });

  test("Verify whether the parastyle dummy4 are displayed properly in Step1", async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle dummy4 option", null, { editorsPage });
    await Then("verify whether the parastyle dummy4 is present", null, { editorsPage });
    await Then("Click on verified13 button", null, { editorsPage });
  });

  test("Verify whether the next button are displayed properly", async ({ Then, editorsPage }) => {
    await Then("the Next button is visible", null, { editorsPage });
    await Then("Click on Step1 next button", null, { editorsPage });
  });

  test("Verify whether the Acknowledged Option are displayed properly in Step2", async ({ When, editorsPage, Then }) => {
    await When("verify step2 acknowledged are displayed", null, { editorsPage });
    await Then("Click on Review the front matter content", null, { editorsPage });
    await Then("verify front matter content is visible", null, { editorsPage });
    await Then("Click on verified14 button", null, { editorsPage });
  });

  test("Verify whether the Table 1 are displayed properly in Step2", async ({ When, editorsPage, Then }) => {
    await When("Click on Review the content in Table 1", null, { editorsPage });
    await Then("verify teblecontent are visible", null, { editorsPage });
    await Then("Click on verified15 button", null, { editorsPage });
  });

  test("Verify whether the Table 2 are displayed properly in Step2", async ({ Then, editorsPage }) => {
    await Then("the Next step2 button is visible", null, { editorsPage });
    await Then("Click on Next step2 button", null, { editorsPage });
  });

  test("Verify whether the Acknowledged Option are displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("verify step3 acknowledged are displayed", null, { editorsPage });
  });

  test("Verfify Text delete on Math", async ({ Then, editorsPage }) => {
    await Then("move and delete text", null, { editorsPage });
  });

  test("Verfify Edits on Partial text", async ({ When, editorsPage, Then }) => {
    await When("click on partial text in step3", null, { editorsPage });
    await Then("click on Edit icon", null, { editorsPage });
    await When("click and verify on equation is visible", null, { editorsPage });
    await Then("click on inputtext", null, { editorsPage });
    await Then("perform an keyboardact", null, { editorsPage });
    await Then("Add text as input", null, { editorsPage });
    await Then("Add Math update button", null, { editorsPage });
    await Then("Delete an Extra Symbol add in Math", null, { editorsPage });
    await Then("click Corrected1 button", null, { editorsPage });
  });

  test("Verify whether the Displaymath has inlinegraphics are displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("verify Displaymath has inlinegraphics", null, { editorsPage });
    await Then("Click on Corrected2 button", null, { editorsPage });
  });

  test("Verify whether the Full text are displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("verify Full text are correctly in UI", null, { editorsPage });
    await Then("Click on Corrected3 button", null, { editorsPage });
  });

  test("Verfify Edits on fnm error", async ({ When, editorsPage, Then }) => {
    await When("click on fnm element error", null, { editorsPage });
    await Then("select an firstname text", null, { editorsPage });
    await Then("verify editcontainer are visible", null, { editorsPage });
    await When("click editor search", null, { editorsPage });
    await Then("select an fnm", null, { editorsPage });
    await Then("click and change into snm", null, { editorsPage });
  });

  test("Verfify Edits and changed snm to x error", async ({ When, editorsPage, Then }) => {
    await When("select an particular text as comma", null, { editorsPage });
    await Then("Dropdown to change the text", null, { editorsPage });
    await Then("verfiy edit form are visible", null, { editorsPage });
    await Then("Fill and change as X", null, { editorsPage });
    await Then("the correction change as corrected", null, { editorsPage });
  });

  test("Verify whether the AuthorEditor surname is missing are displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Click AuthorEditor surname is missing. Check and correct.", null, { editorsPage });
    await Then("Click on Corrected5 button", null, { editorsPage });
  });

  test("Change the UI View", async ({ When, editorsPage, Then }) => {
    await When("click on view button", null, { editorsPage });
    await Then("unclick an parastylelabel", null, { editorsPage });
    await Then("unclick an Inlinecolour", null, { editorsPage });
    await Then("unclick an Nonprintingchar", null, { editorsPage });
    await Then("unclick an coversheet", null, { editorsPage });
  });

  test("Check and verify Incorrect style 'btl' is present and correct", async ({ When, editorsPage, Then }) => {
    await When("Select an btl text", null, { editorsPage });
    await Then("change btl text as article", null, { editorsPage });
    await Then("Click on corrected button are below", null, { editorsPage });
  });

  test("Verify Formatting need to be removed in Year, Volume, Issues and Page ranges Bold", async ({ When, editorsPage, Then }) => {
    await When("select an bold text in refernce", null, { editorsPage });
    await Then("click on unbold button", null, { editorsPage });
    await Then("click Corrected button", null, { editorsPage });
  });

  test("Check and correct,Incorrect format 'bold' is present.", async ({ When, editorsPage, Then }) => {
    await When("check the alert message of incorrect format bold is present", null, { editorsPage });
    await Then("Check and click Corrected button below", null, { editorsPage });
  });

  test("Verify Formatting need to be removed in Year, Volume, Issues and Page ranges Italic.", async ({ When, editorsPage, Then }) => {
    await When("select an italic text in refernce", null, { editorsPage });
    await Then("click on Unitalic button", null, { editorsPage });
    await Then("click the Corrected button", null, { editorsPage });
  });

  test("Check Incorrect format 'italic' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("check the alert message of incorrect format italic is present", null, { editorsPage });
    await Then("Check and click Corrected button are below", null, { editorsPage });
  });

  test("Check Incorrect format 'underline' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("check whether underline are present in refernce", null, { editorsPage });
    await Then("change the underline into normal style", null, { editorsPage });
    await Then("click lastly corrected button", null, { editorsPage });
  });

  test("Verify Incorrect format 'superscript' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("verify wether superscript is present or not", null, { editorsPage });
    await Then("chnge the superscript into normal style", null, { editorsPage });
    await Then("click an lastly corrected button", null, { editorsPage });
  });

  test("Alert message Incorrect style 'pubmedcheck1' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("check and verify again pubmedcheck1 are present", null, { editorsPage });
    await Then("check and verify correct button", null, { editorsPage });
  });

  test("Check Incorrect format 'subscript' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("verify wether Subscript is present or not", null, { editorsPage });
    await Then("chnge the Subscript into normal style", null, { editorsPage });
    await Then("click an last corrected button", null, { editorsPage });
  });

  test("Alert messge Incorrect style 'pubmedcheck2' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("check and verify again pubmedcheck2 are present", null, { editorsPage });
    await Then("check and verify corrected button", null, { editorsPage });
  });

  test("Verify whether the Graphical abstract missing in file are displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Graphical abstract missing in file", null, { editorsPage });
    await Then("Click on Corrected6 button", null, { editorsPage });
  });

  test("Incorrect style 'e-address' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("Click on ORCID in AUTHORS", null, { editorsPage });
    await Then("xref popup should be visible", null, { editorsPage });
    await Then("Unclick an superscript button and corrected", null, { editorsPage });
  });

  test("Verify Affiliation elements repeated twice. Please check.", async ({ When, editorsPage, Then }) => {
    await When("Affiliation text should be check and select", null, { editorsPage });
    await Then("change the nomal text to Affiliation text by affnadd", null, { editorsPage });
    await Then("check and click corrected button", null, { editorsPage });
  });

  test("Check and verify Incorrect style 'stl' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("Select incoorect style stl text", null, { editorsPage });
    await Then("Change into st style", null, { editorsPage });
    await Then("Click the text corrected button", null, { editorsPage });
  });

  test("Verfify Title not allowed for Keywords.error", async ({ When, editorsPage, Then }) => {
    await When("place cursor on Keywords text and press Enter", null, { editorsPage });
    await Then("Select keywords letter and deselect", null, { editorsPage });
    await Then("Use keyboard action Ctrl+Space to Change text as destyle", null, { editorsPage });
    await Then("change keywords as xpara", null, { editorsPage });
    await Then("Insert Xpara", null, { editorsPage });
    await Then("click and Mark as corrected", null, { editorsPage });
  });

  test("Change the UI View as back", async ({ When, editorsPage, Then }) => {
    await When("click on view button back", null, { editorsPage });
    await Then("click an parastylelabel back", null, { editorsPage });
    await Then("click an Inlinecolour back", null, { editorsPage });
    await Then("click an Nonprintingchar back", null, { editorsPage });
    await Then("click an coversheet back", null, { editorsPage });
  });

  test("Verify whether the Unlisted cross-ref link tblS1. displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Please check Unlisted cross-ref link tblS1.", null, { editorsPage });
    await Then("Click on Corrected9 button", null, { editorsPage });
  });

  test("Verify whether the Supporting link is missing or incorrect. displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Supporting link is missing or incorrect. Please check.", null, { editorsPage });
    await Then("Click on Corrected10 button", null, { editorsPage });
  });

  test("Verify whether the Please check author without surname displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Please check author without surname", null, { editorsPage });
    await Then("Click on Corrected11 button", null, { editorsPage });
  });

  test("Verify whether the Inconsistent1 author name pattern displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Inconsistent1 author name pattern, please check.", null, { editorsPage });
    await Then("Click on Corrected12 button", null, { editorsPage });
  });

  test("Verify whether the AuthorEditor surname is missing. displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("AuthorEditor surname is missing. Check and correct.", null, { editorsPage });
    await Then("Click on Corrected13 button", null, { editorsPage });
  });

  test("Verify whether the Inconsistent2 author name pattern, displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Inconsistent2 author name pattern, please check.", null, { editorsPage });
    await Then("Click on Corrected14 button", null, { editorsPage });
  });

  test("Alert Incorrect style 'btl' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("Check alert are correct or incorrect in btl", null, { editorsPage });
    await Then("Click on Corrected button21", null, { editorsPage });
  });

  test("Alert Check incorrect format bold is present", async ({ When, editorsPage, Then }) => {
    await When("Check alert message of bold format is present", null, { editorsPage });
    await Then("Click on Corrected button26", null, { editorsPage });
  });

  test("Alert Check incorrect format Italic is present", async ({ When, editorsPage, Then }) => {
    await When("Check alert message of italic format is present", null, { editorsPage });
    await Then("Click on Corrected button27", null, { editorsPage });
  });

  test("Alert and verify Incorrect format 'underline' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("Check and verify the alert of incorrect underline present", null, { editorsPage });
    await Then("verified and click correctedF button", null, { editorsPage });
  });

  test("Alert and verify Incorrect format 'superscript' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("Check and verify the alert of incorrect superscript present", null, { editorsPage });
    await Then("verified and click correctedG button", null, { editorsPage });
  });

  test("Alert and verify Incorrect style 'pubmedcheck3' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("Check and verify the alert of incorrect pubmedcheck3 present", null, { editorsPage });
    await Then("verified and click correctedH button", null, { editorsPage });
  });

  test("Alert and verify Incorrect format 'subscript' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("Check and verify the alert of incorrect subscript present", null, { editorsPage });
    await Then("verified and click correctedI button", null, { editorsPage });
  });

  test("Alert and verify Incorrect style 'pubmedcheck4' is present. Check and correct.", async ({ When, editorsPage, Then }) => {
    await When("Check and verify the alert of incorrect pubmedcheck4 present", null, { editorsPage });
    await Then("verified and click correctedJ button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib24. displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Check the uncited reference, bibreference id bib24.", null, { editorsPage });
    await Then("Click on Corrected15 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib25. displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Check the uncited reference, bibreference id bib25.", null, { editorsPage });
    await Then("Click on Corrected16 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib26. displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Check the uncited reference, bibreference id bib26.", null, { editorsPage });
    await Then("Click on Corrected17 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib27. displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Check the uncited reference, bibreference id bib27.", null, { editorsPage });
    await Then("Click on Corrected18 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib28. displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Check the uncited reference, bibreference id bib28.", null, { editorsPage });
    await Then("Click on Corrected19 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib29. displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Click the uncited reference, bib-reference id bib29.", null, { editorsPage });
    await Then("Click on Corrected20 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib34. displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Verify Click the uncited reference, bibreference id bib34.", null, { editorsPage });
  });

  test("Verify whether the Check the Corrected21 displayed properly in Step3", async ({ Then, editorsPage }) => {
    await Then("Click on Corrected21 button", null, { editorsPage });
  });

  test("Change URL as opsHead to skip this error", async ({ When, editorsPage, Then }) => {
    await When("Xml link user able to change URL as opsHead", null, { editorsPage });
    await Then("Made an some correction in UI", null, { editorsPage });
    await Then("Click the validate button", null, { editorsPage });
  });

  test("User able to skip error in Step3", async ({ Then, editorsPage, When }) => {
    await Then("Users able to visible skip error option is visible", null, { editorsPage });
    await When("user can click skip error option", null, { editorsPage });
    await Then("Dropdown reason for skip error", null, { editorsPage });
    await Then("click an skip error button to update", null, { editorsPage });
  });

  test("User able to click validate to check", async ({ Then, editorsPage }) => {
    await Then("Click Validate btn", null, { editorsPage });
  });

  test("Again clear some errors in final stage", async ({ When, editorsPage, Then }) => {
    await When("Verify and Click final stage of 1st error", null, { editorsPage });
    await Then("Verify and Click final stage of 2nd error", null, { editorsPage });
    await Then("Verify and Click final stage of 3rd error", null, { editorsPage });
    await Then("Verify and Click final stage of 4th error", null, { editorsPage });
    await Then("Verify and Click final stage of 5th error", null, { editorsPage });
    await Then("Verify and Click final stage of 6th error", null, { editorsPage });
    await Then("Verify and Click final stage of 7th error", null, { editorsPage });
    await Then("click VALIDATE Button", null, { editorsPage });
  });

  test("Verify whether the Validate and submit", async ({ When, editorsPage, Then }) => {
    await When("verify the submit button are present", null, { editorsPage });
    await Then("click submit button", null, { editorsPage });
    await Then("Wait for page load to submit", null, { editorsPage });
  });

  test("Verify whether the after submitted", async ({ When, editorsPage, Then }) => {
    await When("verify after submitted UI text are present in submitted mode", null, { editorsPage });
    await Then("verify This article has been already submitted are present", null, { editorsPage });
  });

  test("Verify After submitted UI user can able to Enable editing", async ({ When, editorsPage, Then }) => {
    await When("Verify the Enable Editing button is visible", null, { editorsPage });
    await Then("User Can click the Enable Editing button", null, { editorsPage });
    await Then("Click on Proceed button to Enable", null, { editorsPage });
  });

  test("Check after enabled editing are user able to edit in UI", async ({ When, editorsPage }) => {
    await When("check user can able to edit after revert the submit", null, { editorsPage });
  });

  test("Check After the Enableediting mode user can able to move submitted", async ({ When, editorsPage, Then }) => {
    await When("click an submit button", null, { editorsPage });
    await Then("Check and verify This article has been already submitted are present", null, { editorsPage });
  });

  test("Move OUTxml are xmlcentral UAT path to testing path", async ({ Then, editorsPage }) => {
    await Then("OUT xml are stored in XMLcentral UAT path & Moved to Testing services path to compare", null, { editorsPage });
  });

  test("Verify after submitted outxml are present", async ({ When, editorsPage, Then }) => {
    await When("To check INxml are stored in server path are visible", null, { editorsPage });
    await Then("To check after submitted OUTxml are stored in server path", null, { editorsPage });
  });

  test("Verify after submitted outxml compare", async ({ When, editorsPage, Then }) => {
    await When("After submitted OUTxml are compare with INxml", null, { editorsPage });
    await Then("Delete OUTxml in Testing path after all verified", null, { editorsPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\editor.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify whether the link generation XML URL": {"pickleLocation":"5:3"},
  "Verify whether the Acknowledged Option are displayed properly in Step1": {"pickleLocation":"15:3"},
  "Verify whether the parastyle Articletitle are displayed properly in Step1": {"pickleLocation":"21:3"},
  "Verify whether the parastyle authors are displayed properly in Step1": {"pickleLocation":"26:3"},
  "Verify whether the parastyle correspondingauthor are displayed properly in Step1": {"pickleLocation":"31:3"},
  "Verify whether the parastyle e-mail are displayed properly in Step1": {"pickleLocation":"36:3"},
  "Verify whether the parastyle dummy1 are displayed properly in Step1": {"pickleLocation":"41:3"},
  "Verify whether the parastyle abstract are displayed properly in Step1": {"pickleLocation":"46:3"},
  "Verify whether the parastyle dummy2 are displayed properly in Step1": {"pickleLocation":"51:3"},
  "Verify whether the parastyle paragraph1 are displayed properly in Step1": {"pickleLocation":"56:3"},
  "Verify whether the parastyle paragraph2 are displayed properly in Step1": {"pickleLocation":"61:3"},
  "Verify whether the parastyle dummy3 are displayed properly in Step1": {"pickleLocation":"66:3"},
  "Verify whether the parastyle sectiona are displayed properly in Step1": {"pickleLocation":"71:3"},
  "Verify whether the parastyle paragraph3 are displayed properly in Step1": {"pickleLocation":"76:3"},
  "Verify whether the parastyle dummy4 are displayed properly in Step1": {"pickleLocation":"81:3"},
  "Verify whether the next button are displayed properly": {"pickleLocation":"86:3"},
  "Verify whether the Acknowledged Option are displayed properly in Step2": {"pickleLocation":"91:3"},
  "Verify whether the Table 1 are displayed properly in Step2": {"pickleLocation":"97:3"},
  "Verify whether the Table 2 are displayed properly in Step2": {"pickleLocation":"102:3"},
  "Verify whether the Acknowledged Option are displayed properly in Step3": {"pickleLocation":"108:3"},
  "Verfify Text delete on Math": {"pickleLocation":"111:3"},
  "Verfify Edits on Partial text": {"pickleLocation":"115:3"},
  "Verify whether the Displaymath has inlinegraphics are displayed properly in Step3": {"pickleLocation":"126:3"},
  "Verify whether the Full text are displayed properly in Step3": {"pickleLocation":"130:3"},
  "Verfify Edits on fnm error": {"pickleLocation":"134:3"},
  "Verfify Edits and changed snm to x error": {"pickleLocation":"142:3"},
  "Verify whether the AuthorEditor surname is missing are displayed properly in Step3": {"pickleLocation":"152:3"},
  "Change the UI View": {"pickleLocation":"156:3"},
  "Check and verify Incorrect style 'btl' is present and correct": {"pickleLocation":"163:3"},
  "Verify Formatting need to be removed in Year, Volume, Issues and Page ranges Bold": {"pickleLocation":"168:3"},
  "Check and correct,Incorrect format 'bold' is present.": {"pickleLocation":"173:3"},
  "Verify Formatting need to be removed in Year, Volume, Issues and Page ranges Italic.": {"pickleLocation":"177:3"},
  "Check Incorrect format 'italic' is present. Check and correct.": {"pickleLocation":"182:3"},
  "Check Incorrect format 'underline' is present. Check and correct.": {"pickleLocation":"186:3"},
  "Verify Incorrect format 'superscript' is present. Check and correct.": {"pickleLocation":"191:3"},
  "Alert message Incorrect style 'pubmedcheck1' is present. Check and correct.": {"pickleLocation":"196:3"},
  "Check Incorrect format 'subscript' is present. Check and correct.": {"pickleLocation":"200:3"},
  "Alert messge Incorrect style 'pubmedcheck2' is present. Check and correct.": {"pickleLocation":"205:3"},
  "Verify whether the Graphical abstract missing in file are displayed properly in Step3": {"pickleLocation":"209:3"},
  "Incorrect style 'e-address' is present. Check and correct.": {"pickleLocation":"213:3"},
  "Verify Affiliation elements repeated twice. Please check.": {"pickleLocation":"218:3"},
  "Check and verify Incorrect style 'stl' is present. Check and correct.": {"pickleLocation":"223:3"},
  "Verfify Title not allowed for Keywords.error": {"pickleLocation":"228:3"},
  "Change the UI View as back": {"pickleLocation":"236:3"},
  "Verify whether the Unlisted cross-ref link tblS1. displayed properly in Step3": {"pickleLocation":"243:3"},
  "Verify whether the Supporting link is missing or incorrect. displayed properly in Step3": {"pickleLocation":"247:3"},
  "Verify whether the Please check author without surname displayed properly in Step3": {"pickleLocation":"251:3"},
  "Verify whether the Inconsistent1 author name pattern displayed properly in Step3": {"pickleLocation":"255:3"},
  "Verify whether the AuthorEditor surname is missing. displayed properly in Step3": {"pickleLocation":"259:3"},
  "Verify whether the Inconsistent2 author name pattern, displayed properly in Step3": {"pickleLocation":"263:3"},
  "Alert Incorrect style 'btl' is present. Check and correct.": {"pickleLocation":"267:3"},
  "Alert Check incorrect format bold is present": {"pickleLocation":"271:3"},
  "Alert Check incorrect format Italic is present": {"pickleLocation":"275:3"},
  "Alert and verify Incorrect format 'underline' is present. Check and correct.": {"pickleLocation":"279:3"},
  "Alert and verify Incorrect format 'superscript' is present. Check and correct.": {"pickleLocation":"283:3"},
  "Alert and verify Incorrect style 'pubmedcheck3' is present. Check and correct.": {"pickleLocation":"287:3"},
  "Alert and verify Incorrect format 'subscript' is present. Check and correct.": {"pickleLocation":"291:3"},
  "Alert and verify Incorrect style 'pubmedcheck4' is present. Check and correct.": {"pickleLocation":"295:3"},
  "Verify whether the Check the uncited reference, bibreference id bib24. displayed properly in Step3": {"pickleLocation":"299:3"},
  "Verify whether the Check the uncited reference, bibreference id bib25. displayed properly in Step3": {"pickleLocation":"303:3"},
  "Verify whether the Check the uncited reference, bibreference id bib26. displayed properly in Step3": {"pickleLocation":"307:3"},
  "Verify whether the Check the uncited reference, bibreference id bib27. displayed properly in Step3": {"pickleLocation":"311:3"},
  "Verify whether the Check the uncited reference, bibreference id bib28. displayed properly in Step3": {"pickleLocation":"315:3"},
  "Verify whether the Check the uncited reference, bibreference id bib29. displayed properly in Step3": {"pickleLocation":"319:3"},
  "Verify whether the Check the uncited reference, bibreference id bib34. displayed properly in Step3": {"pickleLocation":"323:3"},
  "Verify whether the Check the Corrected21 displayed properly in Step3": {"pickleLocation":"326:3"},
  "Change URL as opsHead to skip this error": {"pickleLocation":"329:3"},
  "User able to skip error in Step3": {"pickleLocation":"334:3"},
  "User able to click validate to check": {"pickleLocation":"340:3"},
  "Again clear some errors in final stage": {"pickleLocation":"343:3"},
  "Verify whether the Validate and submit": {"pickleLocation":"354:3"},
  "Verify whether the after submitted": {"pickleLocation":"359:3"},
  "Verify After submitted UI user can able to Enable editing": {"pickleLocation":"363:3"},
  "Check after enabled editing are user able to edit in UI": {"pickleLocation":"368:3"},
  "Check After the Enableediting mode user can able to move submitted": {"pickleLocation":"376:3"},
  "Move OUTxml are xmlcentral UAT path to testing path": {"pickleLocation":"380:3"},
  "Verify after submitted outxml are present": {"pickleLocation":"383:3"},
  "Verify after submitted outxml compare": {"pickleLocation":"387:3"},
};