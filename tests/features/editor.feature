Feature: Application UI Validation
  As a user, I want to verify various options available in the application UI

  
  Scenario: Verify whether the link generation XML URL
     Then I open the parent page
     When User can add JID 
     Then User can add AID
     Then upload tud xml input
     Then upload json file
     When click submit button for Link Generation
     Then Verify on href tag into XML Central Link
     Then close the xml generate link
     
  Scenario: Verify whether the Acknowledged Option are displayed properly in Step1
    When I switch to the child page and close the parent
    When Click on Continue option
    Then the Review parastyle label be visible

  Scenario: Verify after submitted outxml compare
    When To check outxml are stored in server path
  
  Scenario: Verify whether the parastyle Articletitle are displayed properly in Step1
    Then Click on Review the parastyle Articletitle option
    Then verify whether the parastyle Artice is present
    Then Click on verified1 button
  
  Scenario: Verify whether the parastyle authors are displayed properly in Step1
    Then Click on Review the parastyle authors option
    Then verify whether the parastyle Author is present
    Then Click on verified2 button
  
  Scenario: Verify whether the parastyle correspondingauthor are displayed properly in Step1
    Then Click on Review the parastyle correspondingauthor option
    Then verify whether the parastyle correspondingauthor is present
    Then Click on verified3 button
  
  Scenario: Verify whether the parastyle e-mail are displayed properly in Step1
    Then Click on Review the parastyle e-mail option
    Then verify whether the parastyle e-mail is present
    Then Click on verified4 button
  
  Scenario: Verify whether the parastyle dummy1 are displayed properly in Step1
    Then Click on Review the parastyle dummy1 option
    Then verify whether the parastyle dummy1 is present
    Then Click on verified5 button
  
  Scenario: Verify whether the parastyle abstract are displayed properly in Step1
    Then Click on Review the parastyle abstract option
    Then verify whether the parastyle abstract is present
    Then Click on verified6 button
  
  Scenario: Verify whether the parastyle dummy2 are displayed properly in Step1
    Then Click on Review the parastyle dummy2 option
    Then verify whether the parastyle dummy2 is present
    Then Click on verified7 button
  
  Scenario: Verify whether the parastyle paragraph1 are displayed properly in Step1
    Then Click on Review the parastyle paragraph1 option
    Then verify whether the parastyle paragraph1 is present
    Then Click on verified8 button
  
  Scenario: Verify whether the parastyle paragraph2 are displayed properly in Step1
    Then Click on Review the parastyle paragraph2 option
    Then verify whether the parastyle paragraph2 is present
    Then Click on verified9 button
  
  Scenario: Verify whether the parastyle dummy3 are displayed properly in Step1
    Then Click on Review the parastyle dummy3 option
    Then verify whether the parastyle dummy3 is present
    Then Click on verified10 button
  
  Scenario: Verify whether the parastyle sectiona are displayed properly in Step1
    Then Click on Review the parastyle sectiona option
    Then verify whether the parastyle sectiona is present
    Then Click on verified11 button
  
  Scenario: Verify whether the parastyle paragraph3 are displayed properly in Step1
    Then Click on Review the parastyle paragraph3 option
    Then verify whether the parastyle paragraph3 is present
    Then Click on verified12 button
  
  Scenario: Verify whether the parastyle dummy4 are displayed properly in Step1
    Then Click on Review the parastyle dummy4 option
    Then verify whether the parastyle dummy4 is present
    Then Click on verified13 button
  
  Scenario: Verify whether the next button are displayed properly
    Then the Next button is visible
    Then Click on Step1 next button

   
  Scenario: Verify whether the Acknowledged Option are displayed properly in Step2
    When verify step2 acknowledged are displayed
    Then Click on Review the front matter content
    Then verify front matter content is visible
    Then Click on verified14 button
  
  Scenario: Verify whether the Table 1 are displayed properly in Step2
    When Click on Review the content in Table 1
    Then verify teblecontent are visible
    Then Click on verified15 button
  
  Scenario: Verify whether the Table 2 are displayed properly in Step2
    Then the Next step2 button is visible
    Then Click on Next step2 button

 

  Scenario: Verify whether the Acknowledged Option are displayed properly in Step3
    Then verify step3 acknowledged are displayed
 
  Scenario: Verfify Text delete on Math
    #  Then click text on Math
     Then move and delete text
     
  Scenario: Verfify Edits on Partial text
     When click on partial text in step3
     Then click on Edit icon
     When click and verify on equation is visible
     Then click on inputtext
     Then perform an keyboardact
     Then Add text as input
     Then Add Math update button
     Then Delete an Extra Symbol add in Math
     Then click Corrected1 button
       
  Scenario: Verify whether the Displaymath has inlinegraphics are displayed properly in Step3
    Then verify Displaymath has inlinegraphics
    Then Click on Corrected2 button
  
  Scenario: Verify whether the Full text are displayed properly in Step3
    Then verify Full text are correctly in UI
    Then Click on Corrected3 button
  
  Scenario: Verfify Edits on fnm error
    When click on fnm element error
    Then select an firstname text
    Then verify editcontainer are visible
    When click editor search 
    Then select an fnm
    Then click and change into snm
  
  Scenario: Verfify Edits and changed snm to x error
    When select an particular text as comma
    Then Dropdown to change the text
    Then verfiy edit form are visible
    Then Fill and change as X 
    # Then select the space and dropdown to change
    # Then verify and click on editor and editor form are visible
    # Then Fill and Update space content 
    Then the correction change as corrected
  
  Scenario: Verify whether the AuthorEditor surname is missing are displayed properly in Step3
    Then Click AuthorEditor surname is missing. Check and correct.
    Then Click on Corrected5 button
  
  Scenario: Verify whether the Graphical abstract missing in file are displayed properly in Step3
    Then Verify Graphical abstract missing in file
    Then Click on Corrected6 button
  
  Scenario: Verfify Title not allowed for Keywords.error
    When place cursor on Keywords text and press Enter
    Then Select keywords letter and deselect
    Then Use keyboard action Ctrl+Space to Change text as destyle
    Then change keywords as xpara
    Then Insert Xpara
    Then click and Mark as corrected
  
  Scenario: Verify whether the Unlisted cross-ref link tblS1. displayed properly in Step3
    Then Verify Please check Unlisted cross-ref link tblS1.
    Then Click on Corrected9 button
  
  Scenario: Verify whether the Supporting link is missing or incorrect. displayed properly in Step3
    Then Verify Supporting link is missing or incorrect. Please check.
    Then Click on Corrected10 button
  
  Scenario: Verify whether the Please check author without surname displayed properly in Step3
    Then Verify Please check author without surname
    Then Click on Corrected11 button
  
  Scenario: Verify whether the Inconsistent1 author name pattern displayed properly in Step3
    Then Verify Inconsistent1 author name pattern, please check.
    Then Click on Corrected12 button
  
  Scenario: Verify whether the AuthorEditor surname is missing. displayed properly in Step3
    Then AuthorEditor surname is missing. Check and correct.  
    Then Click on Corrected13 button
  
  Scenario: Verify whether the Inconsistent2 author name pattern, displayed properly in Step3
    Then Verify Inconsistent2 author name pattern, please check.
    Then Click on Corrected14 button
  
  Scenario: Verify whether the Check the uncited reference, bibreference id bib24. displayed properly in Step3
    Then Verify Check the uncited reference, bibreference id bib24.
    Then Click on Corrected15 button
  
  Scenario: Verify whether the Check the uncited reference, bibreference id bib25. displayed properly in Step3
    Then Verify Check the uncited reference, bibreference id bib25.
    Then Click on Corrected16 button
  
  Scenario: Verify whether the Check the uncited reference, bibreference id bib26. displayed properly in Step3
    Then Verify Check the uncited reference, bibreference id bib26.
    Then Click on Corrected17 button
  
  Scenario: Verify whether the Check the uncited reference, bibreference id bib27. displayed properly in Step3
    Then Verify Check the uncited reference, bibreference id bib27.
    Then Click on Corrected18 button
  
  Scenario: Verify whether the Check the uncited reference, bibreference id bib28. displayed properly in Step3
    Then Verify Check the uncited reference, bibreference id bib28.
    Then Click on Corrected19 button
  
  Scenario: Verify whether the Check the uncited reference, bibreference id bib29. displayed properly in Step3
    Then Verify Click the uncited reference, bib-reference id bib29.
    Then Click on Corrected20 button
  
  Scenario: Verify whether the Check the uncited reference, bibreference id bib34. displayed properly in Step3
    Then Verify Click the uncited reference, bibreference id bib34. 
  
  Scenario: Verify whether the Check the Corrected21 displayed properly in Step3
    Then Click on Corrected21 button
    Then Click the validate button
  
  Scenario: Verify whether the Validate and submit
     When verify the submit button are present
     Then click submit button
     Then Wait for page load to submit

  Scenario: Verify whether the after submitted
     When verify after submitted UI text are present in submitted mode
     Then verify This article has been already submitted are present

  Scenario: Verify After submitted UI user can able to Enable editing
    When Verify the Enable Editing button is visible
    Then User Can click the Enable Editing button
    Then Click on Proceed button to Enable

  Scenario: Check after enabled editing are user able to edit in UI
    When check user can able to edit after revert the submit

# Scenario: Check and verify user can able to convert Normal text into Math QA server
  #   When Select any text in UI
  #   Then click an format button
  #   Then Check user can able to convert text as math    

  Scenario: Check After the Enableediting mode user can able to move submitted
    When click an submit button
    Then Check and verify This article has been already submitted are present 

  Scenario: To check after submitted outxml compare
    When To check outxml are stored in server path
    




                    



 
    

  

