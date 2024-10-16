/** Generated from: tests\features\editor.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("Application UI Validation", () => {

  test("Open application XML URL", { tag: ["@focus"] }, async ({ Given }) => {
    await Given("I want to open the application url page");
  });

  test("Verify whether the Acknowledged Option are displayed properly in Step1", { tag: ["@focus"] }, async ({ When, editorsPage, Then }) => {
    await When("Click on Continue option", null, { editorsPage });
    await Then("the Review parastyle label be visible", null, { editorsPage });
  });

  test("Verify whether the parastyle Articletitle are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle Articletitle option", null, { editorsPage });
    await Then("verify whether the parastyle Artice is present", null, { editorsPage });
    await Then("Click on verified1 button", null, { editorsPage });
  });

  test("Verify whether the parastyle authors are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle authors option", null, { editorsPage });
    await Then("verify whether the parastyle Author is present", null, { editorsPage });
    await Then("Click on verified2 button", null, { editorsPage });
  });

  test("Verify whether the parastyle correspondingauthor are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle correspondingauthor option", null, { editorsPage });
    await Then("verify whether the parastyle correspondingauthor is present", null, { editorsPage });
    await Then("Click on verified3 button", null, { editorsPage });
  });

  test("Verify whether the parastyle e-mail are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle e-mail option", null, { editorsPage });
    await Then("verify whether the parastyle e-mail is present", null, { editorsPage });
    await Then("Click on verified4 button", null, { editorsPage });
  });

  test("Verify whether the parastyle dummy1 are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle dummy1 option", null, { editorsPage });
    await Then("verify whether the parastyle dummy1 is present", null, { editorsPage });
    await Then("Click on verified5 button", null, { editorsPage });
  });

  test("Verify whether the parastyle abstract are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle abstract option", null, { editorsPage });
    await Then("verify whether the parastyle abstract is present", null, { editorsPage });
    await Then("Click on verified6 button", null, { editorsPage });
  });

  test("Verify whether the parastyle dummy2 are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle dummy2 option", null, { editorsPage });
    await Then("verify whether the parastyle dummy2 is present", null, { editorsPage });
    await Then("Click on verified7 button", null, { editorsPage });
  });

  test("Verify whether the parastyle paragraph1 are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle paragraph1 option", null, { editorsPage });
    await Then("verify whether the parastyle paragraph1 is present", null, { editorsPage });
    await Then("Click on verified8 button", null, { editorsPage });
  });

  test("Verify whether the parastyle paragraph2 are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle paragraph2 option", null, { editorsPage });
    await Then("verify whether the parastyle paragraph2 is present", null, { editorsPage });
    await Then("Click on verified9 button", null, { editorsPage });
  });

  test("Verify whether the parastyle dummy3 are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle dummy3 option", null, { editorsPage });
    await Then("verify whether the parastyle dummy3 is present", null, { editorsPage });
    await Then("Click on verified10 button", null, { editorsPage });
  });

  test("Verify whether the parastyle sectiona are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle sectiona option", null, { editorsPage });
    await Then("verify whether the parastyle sectiona is present", null, { editorsPage });
    await Then("Click on verified11 button", null, { editorsPage });
  });

  test("Verify whether the parastyle paragraph3 are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle paragraph3 option", null, { editorsPage });
    await Then("verify whether the parastyle paragraph3 is present", null, { editorsPage });
    await Then("Click on verified12 button", null, { editorsPage });
  });

  test("Verify whether the parastyle dummy4 are displayed properly in Step1", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the parastyle dummy4 option", null, { editorsPage });
    await Then("verify whether the parastyle dummy4 is present", null, { editorsPage });
    await Then("Click on verified13 button", null, { editorsPage });
  });

  test("Verify whether the next button are displayed properly", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("the Next button is visible", null, { editorsPage });
    await Then("Click on Step1 next button", null, { editorsPage });
  });

  test("Verify whether the Acknowledged Option are displayed properly in Step2", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("verify step2 acknowledged are displayed", null, { editorsPage });
    await Then("Click on Review the front matter content", null, { editorsPage });
    await Then("Click on verified14 button", null, { editorsPage });
  });

  test("Verify whether the Table 1 are displayed properly in Step2", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Review the content in Table 1", null, { editorsPage });
    await Then("Click on verified15 button", null, { editorsPage });
  });

  test("Verify whether the Table 2 are displayed properly in Step2", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("the Next step2 button is visible", null, { editorsPage });
    await Then("Click on Next step2 button", null, { editorsPage });
  });

  test("Verify whether the Acknowledged Option are displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("verify step3 acknowledged are displayed", null, { editorsPage });
  });

  test("Verfify Text delete on Math", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("move and delete text", null, { editorsPage });
  });

  test("Verfify Edits on Partial text", { tag: ["@focus"] }, async ({ When, editorsPage, Then }) => {
    await When("click on partial text in step3", null, { editorsPage });
    await Then("click on equation", null, { editorsPage });
    await Then("click on inputtext", null, { editorsPage });
    await Then("perform an keyboardact", null, { editorsPage });
    await Then("Add text as input", null, { editorsPage });
    await Then("Add Math update button", null, { editorsPage });
    await Then("click Corrected1 button", null, { editorsPage });
  });

  test("Verify whether the Displaymath has inlinegraphics are displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Displaymath has inlinegraphics", null, { editorsPage });
    await Then("Click on Corrected2 button", null, { editorsPage });
  });

  test("Verify whether the Full text are displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Full text", null, { editorsPage });
    await Then("Click on Corrected3 button", null, { editorsPage });
  });

  test("Verfify Edits on fnm error", { tag: ["@focus"] }, async ({ When, editorsPage, Then }) => {
    await When("click on fnm element error", null, { editorsPage });
    await Then("select an firstname text", null, { editorsPage });
    await Then("verify editcontainer are visible", null, { editorsPage });
    await When("click editor search", null, { editorsPage });
    await Then("select an fnm", null, { editorsPage });
    await Then("click and change into snm", null, { editorsPage });
  });

  test("Verfify Edits and changed snm to x error", { tag: ["@focus"] }, async ({ When, editorsPage, Then }) => {
    await When("select an particular text as comma", null, { editorsPage });
    await Then("Dropdown to change the text", null, { editorsPage });
    await Then("verfiy edit form are visible", null, { editorsPage });
    await Then("Fill and change as X", null, { editorsPage });
    await Then("select the space and dropdown to change", null, { editorsPage });
    await Then("verify and click on editor and editor form are visible", null, { editorsPage });
    await Then("Fill and Update space content", null, { editorsPage });
    await Then("the correction change as corrected", null, { editorsPage });
  });

  test("Verify whether the AuthorEditor surname is missing are displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click AuthorEditor surname is missing. Check and correct.", null, { editorsPage });
    await Then("Click on Corrected5 button", null, { editorsPage });
  });

  test("Verify whether the Graphical abstract missing in file are displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Graphical abstract missing in file", null, { editorsPage });
    await Then("Click on Corrected6 button", null, { editorsPage });
  });

  test("Verfify Title not allowed for Keywords.error", { tag: ["@focus"] }, async ({ When, editorsPage, Then }) => {
    await When("place cursor on Keywords text and press Enter", null, { editorsPage });
    await Then("Select keywords letter and deselect", null, { editorsPage });
    await Then("Use keyboard action Ctrl+Space to Change text as destyle", null, { editorsPage });
    await Then("change keywords as xpara", null, { editorsPage });
    await Then("Insert Xpara", null, { editorsPage });
    await Then("click and Mark as corrected", null, { editorsPage });
  });

  test("Verify whether the Unlisted cross-ref link tblS1. displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Please check Unlisted cross-ref link tblS1.", null, { editorsPage });
    await Then("Click on Corrected9 button", null, { editorsPage });
  });

  test("Verify whether the Supporting link is missing or incorrect. displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Supporting link is missing or incorrect. Please check.", null, { editorsPage });
    await Then("Click on Corrected10 button", null, { editorsPage });
  });

  test("Verify whether the Please check author without surname displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Please check author without surname", null, { editorsPage });
    await Then("Click on Corrected11 button", null, { editorsPage });
  });

  test("Verify whether the Inconsistent1 author name pattern displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Inconsistent1 author name pattern, please check.", null, { editorsPage });
    await Then("Click on Corrected12 button", null, { editorsPage });
  });

  test("Verify whether the AuthorEditor surname is missing. displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("AuthorEditor surname is missing. Check and correct.", null, { editorsPage });
    await Then("Click on Corrected13 button", null, { editorsPage });
  });

  test("Verify whether the Inconsistent2 author name pattern, displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Inconsistent2 author name pattern, please check.", null, { editorsPage });
    await Then("Click on Corrected14 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib24. displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Check the uncited reference, bibreference id bib24.", null, { editorsPage });
    await Then("Click on Corrected15 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib25. displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Check the uncited reference, bibreference id bib25.", null, { editorsPage });
    await Then("Click on Corrected16 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib26. displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Check the uncited reference, bibreference id bib26.", null, { editorsPage });
    await Then("Click on Corrected17 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib27. displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Check the uncited reference, bibreference id bib27.", null, { editorsPage });
    await Then("Click on Corrected18 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib28. displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Check the uncited reference, bibreference id bib28.", null, { editorsPage });
    await Then("Click on Corrected19 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib29. displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click the uncited reference, bib-reference id bib29.", null, { editorsPage });
    await Then("Click on Corrected20 button", null, { editorsPage });
  });

  test("Verify whether the Check the uncited reference, bibreference id bib34. displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click the uncited reference, bibreference id bib34.", null, { editorsPage });
  });

  test("Verify whether the Check the Corrected21 displayed properly in Step3", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("Click on Corrected21 button", null, { editorsPage });
    await Then("Click the validate button", null, { editorsPage });
  });

  test("Verify whether the Validate and submit", { tag: ["@focus"] }, async ({ Then, editorsPage }) => {
    await Then("verify the submit button are present", null, { editorsPage });
    await Then("click submit button", null, { editorsPage });
    await Then("verify after submitted UI text are present in submitted mode", null, { editorsPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\editor.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Open application XML URL": {"pickleLocation":"4:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Acknowledged Option are displayed properly in Step1": {"pickleLocation":"7:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle Articletitle are displayed properly in Step1": {"pickleLocation":"11:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle authors are displayed properly in Step1": {"pickleLocation":"16:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle correspondingauthor are displayed properly in Step1": {"pickleLocation":"21:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle e-mail are displayed properly in Step1": {"pickleLocation":"26:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle dummy1 are displayed properly in Step1": {"pickleLocation":"31:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle abstract are displayed properly in Step1": {"pickleLocation":"36:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle dummy2 are displayed properly in Step1": {"pickleLocation":"41:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle paragraph1 are displayed properly in Step1": {"pickleLocation":"46:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle paragraph2 are displayed properly in Step1": {"pickleLocation":"51:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle dummy3 are displayed properly in Step1": {"pickleLocation":"56:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle sectiona are displayed properly in Step1": {"pickleLocation":"61:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle paragraph3 are displayed properly in Step1": {"pickleLocation":"66:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the parastyle dummy4 are displayed properly in Step1": {"pickleLocation":"71:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the next button are displayed properly": {"pickleLocation":"76:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Acknowledged Option are displayed properly in Step2": {"pickleLocation":"81:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Table 1 are displayed properly in Step2": {"pickleLocation":"86:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Table 2 are displayed properly in Step2": {"pickleLocation":"90:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Acknowledged Option are displayed properly in Step3": {"pickleLocation":"96:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verfify Text delete on Math": {"pickleLocation":"99:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verfify Edits on Partial text": {"pickleLocation":"104:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Displaymath has inlinegraphics are displayed properly in Step3": {"pickleLocation":"113:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Full text are displayed properly in Step3": {"pickleLocation":"117:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verfify Edits on fnm error": {"pickleLocation":"121:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verfify Edits and changed snm to x error": {"pickleLocation":"129:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the AuthorEditor surname is missing are displayed properly in Step3": {"pickleLocation":"139:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Graphical abstract missing in file are displayed properly in Step3": {"pickleLocation":"143:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verfify Title not allowed for Keywords.error": {"pickleLocation":"147:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Unlisted cross-ref link tblS1. displayed properly in Step3": {"pickleLocation":"155:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Supporting link is missing or incorrect. displayed properly in Step3": {"pickleLocation":"159:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Please check author without surname displayed properly in Step3": {"pickleLocation":"163:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Inconsistent1 author name pattern displayed properly in Step3": {"pickleLocation":"167:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the AuthorEditor surname is missing. displayed properly in Step3": {"pickleLocation":"171:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Inconsistent2 author name pattern, displayed properly in Step3": {"pickleLocation":"175:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Check the uncited reference, bibreference id bib24. displayed properly in Step3": {"pickleLocation":"179:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Check the uncited reference, bibreference id bib25. displayed properly in Step3": {"pickleLocation":"183:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Check the uncited reference, bibreference id bib26. displayed properly in Step3": {"pickleLocation":"187:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Check the uncited reference, bibreference id bib27. displayed properly in Step3": {"pickleLocation":"191:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Check the uncited reference, bibreference id bib28. displayed properly in Step3": {"pickleLocation":"195:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Check the uncited reference, bibreference id bib29. displayed properly in Step3": {"pickleLocation":"199:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Check the uncited reference, bibreference id bib34. displayed properly in Step3": {"pickleLocation":"203:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Check the Corrected21 displayed properly in Step3": {"pickleLocation":"206:3","tags":["@focus"],"ownTags":["@focus"]},
  "Verify whether the Validate and submit": {"pickleLocation":"210:1","tags":["@focus"],"ownTags":["@focus"]},
};