Feature: Application UI Validation
  As a user, I want to verify various options available in the application UI
@focus
  Scenario: Open application XML URL
    Given I want to open the application url page    
@focus
  Scenario: Verify whether the Acknowledged Option are displayed properly in Step1
    When Click on Continue option
    Then the Review parastyle label be visible
@focus
  Scenario: Verify whether the parastyle Articletitle are displayed properly in Step1
    Then Click on Review the parastyle Articletitle option
    Then verify whether the parastyle Artice is present
    Then Click on verified1 button
@focus
  Scenario: Verify whether the parastyle authors are displayed properly in Step1
    Then Click on Review the parastyle authors option
    Then verify whether the parastyle Author is present
    Then Click on verified2 button
@focus
  Scenario: Verify whether the parastyle correspondingauthor are displayed properly in Step1
    Then Click on Review the parastyle correspondingauthor option
    Then verify whether the parastyle correspondingauthor is present
    Then Click on verified3 button
@focus
  Scenario: Verify whether the parastyle e-mail are displayed properly in Step1
    Then Click on Review the parastyle e-mail option
    Then verify whether the parastyle e-mail is present
    Then Click on verified4 button
@focus
  Scenario: Verify whether the parastyle dummy1 are displayed properly in Step1
    Then Click on Review the parastyle dummy1 option
    Then verify whether the parastyle dummy1 is present
    Then Click on verified5 button
@focus
  Scenario: Verify whether the parastyle abstract are displayed properly in Step1
    Then Click on Review the parastyle abstract option
    Then verify whether the parastyle abstract is present
    Then Click on verified6 button
@focus
  Scenario: Verify whether the parastyle dummy2 are displayed properly in Step1
    Then Click on Review the parastyle dummy2 option
    Then verify whether the parastyle dummy2 is present
    Then Click on verified7 button
@focus
  Scenario: Verify whether the parastyle paragraph1 are displayed properly in Step1
    Then Click on Review the parastyle paragraph1 option
    Then verify whether the parastyle paragraph1 is present
    Then Click on verified8 button
@focus
  Scenario: Verify whether the parastyle paragraph2 are displayed properly in Step1
    Then Click on Review the parastyle paragraph2 option
    Then verify whether the parastyle paragraph2 is present
    Then Click on verified9 button
@focus
  Scenario: Verify whether the parastyle dummy3 are displayed properly in Step1
    Then Click on Review the parastyle dummy3 option
    Then verify whether the parastyle dummy3 is present
    Then Click on verified10 button
@focus
  Scenario: Verify whether the parastyle sectiona are displayed properly in Step1
    Then Click on Review the parastyle sectiona option
    Then verify whether the parastyle sectiona is present
    Then Click on verified11 button
@focus
  Scenario: Verify whether the parastyle paragraph3 are displayed properly in Step1
    Then Click on Review the parastyle paragraph3 option
    Then verify whether the parastyle paragraph3 is present
    Then Click on verified12 button
@focus
  Scenario: Verify whether the parastyle dummy4 are displayed properly in Step1
    Then Click on Review the parastyle dummy4 option
    Then verify whether the parastyle dummy4 is present
    Then Click on verified13 button
@focus
  Scenario: Verify whether the next button are displayed properly
    Then the Next button is visible
    Then Click on Step1 next button

@focus 
  Scenario: Verify whether the Acknowledged Option are displayed properly in Step2
    Then verify step2 acknowledged are displayed
    Then Click on Review the front matter content
    Then Click on verified14 button
@focus
  Scenario: Verify whether the Table 1 are displayed properly in Step2
    Then Click on Review the content in Table 1
    Then Click on verified15 button
@focus
  Scenario: Verify whether the Table 2 are displayed properly in Step2
    Then the Next step2 button is visible
    Then Click on Next step2 button


@focus
  Scenario: Verify whether the Acknowledged Option are displayed properly in Step3
    Then verify step3 acknowledged are displayed
@focus
  Scenario: Verfify Text delete on Math
    #  Then click text on Math
    #  Add once click partial text 1 and move and delete
     Then move and delete text
@focus     
  Scenario: Verfify Edits on Partial text
     When click on partial text in step3
     Then click on equation
     Then click on inputtext
     Then perform an keyboardact
     Then Add text as input
     Then Add Math update button
     Then click Corrected1 button
@focus     
  Scenario: Verify whether the Displaymath has inlinegraphics are displayed properly in Step3
    Then Click on Displaymath has inlinegraphics
    Then Click on Corrected2 button
@focus
  Scenario: Verify whether the Full text are displayed properly in Step3
    Then Click on Full text
    Then Click on Corrected3 button
@focus
  Scenario: Verfify Edits on fnm error
    When click on fnm element error
    Then select an firstname text
    Then verify editcontainer are visible
    When click editor search 
    Then select an fnm
    Then click and change into snm
@focus
  Scenario: Verfify Edits and changed snm to x error
    When select an particular text as comma
    Then Dropdown to change the text
    Then verfiy edit form are visible
    Then Fill and change as X 
    Then select the space and dropdown to change
    Then verify and click on editor and editor form are visible
    Then Fill and Update space content 
    Then the correction change as corrected
@focus
  Scenario: Verify whether the AuthorEditor surname is missing are displayed properly in Step3
    Then Click AuthorEditor surname is missing. Check and correct.
    Then Click on Corrected5 button
@focus
  Scenario: Verify whether the Graphical abstract missing in file are displayed properly in Step3
    Then Graphical abstract missing in file
    Then Click on Corrected6 button
@focus
  Scenario: Verfify Title not allowed for Keywords.error
    When place cursor on Keywords text and press Enter
    Then Select keywords letter and deselect
    Then Use keyboard action Ctrl+Space to Change text as destyle
    Then change keywords as xpara
    Then Insert Xpara
    Then click and Mark as corrected
@focus
  Scenario: Verify whether the Unlisted cross-ref link tblS1. displayed properly in Step3
    Then Please check Unlisted cross-ref link tblS1.
    Then Click on Corrected9 button
@focus
  Scenario: Verify whether the Supporting link is missing or incorrect. displayed properly in Step3
    Then Supporting link is missing or incorrect. Please check.
    Then Click on Corrected10 button
@focus
  Scenario: Verify whether the Please check author without surname displayed properly in Step3
    Then Please check author without surname
    Then Click on Corrected11 button
@focus
  Scenario: Verify whether the Inconsistent1 author name pattern displayed properly in Step3
    Then Inconsistent1 author name pattern, please check.
    Then Click on Corrected12 button
@focus
  Scenario: Verify whether the AuthorEditor surname is missing. displayed properly in Step3
    Then AuthorEditor surname is missing. Check and correct.  
    Then Click on Corrected13 button
@focus
  Scenario: Verify whether the Inconsistent2 author name pattern, displayed properly in Step3
    Then Inconsistent2 author name pattern, please check.
    Then Click on Corrected14 button
@focus
  Scenario: Verify whether the Check the uncited reference, bibreference id bib24. displayed properly in Step3
    Then Check the uncited reference, bibreference id bib24.
    Then Click on Corrected15 button
@focus
  Scenario: Verify whether the Check the uncited reference, bibreference id bib25. displayed properly in Step3
    Then Check the uncited reference, bibreference id bib25.
    Then Click on Corrected16 button
@focus
  Scenario: Verify whether the Check the uncited reference, bibreference id bib26. displayed properly in Step3
    Then Check the uncited reference, bibreference id bib26.
    Then Click on Corrected17 button
@focus
  Scenario: Verify whether the Check the uncited reference, bibreference id bib27. displayed properly in Step3
    Then Check the uncited reference, bibreference id bib27.
    Then Click on Corrected18 button
@focus
  Scenario: Verify whether the Check the uncited reference, bibreference id bib28. displayed properly in Step3
    Then Check the uncited reference, bibreference id bib28.
    Then Click on Corrected19 button
@focus
  Scenario: Verify whether the Check the uncited reference, bibreference id bib29. displayed properly in Step3
    Then Click the uncited reference, bib-reference id bib29.
    Then Click on Corrected20 button
@focus
  Scenario: Verify whether the Check the uncited reference, bibreference id bib34. displayed properly in Step3
    Then Click the uncited reference, bibreference id bib34.
@focus
  Scenario: Verify whether the Check the Corrected21 displayed properly in Step3
    Then Click on Corrected21 button
    Then Click the validate button
@focus
Scenario: Verify whether the Validate and submit
     Then verify the submit button are present
     Then click submit button 
     Then verify after submitted UI text are present in submitted mode
  

