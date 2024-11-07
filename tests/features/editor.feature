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
    Then Files are moved 
  
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

  Scenario: Change the UI View
    When click on view button
    Then unclick an parastylelabel
    Then unclick an Inlinecolour
    Then unclick an Nonprintingchar
    Then unclick an coversheet

  Scenario: Check and verify Incorrect style 'btl' is present and correct
    When Select an btl text 
    Then change btl text as article
    Then Click on corrected button are below 

  Scenario: Verify Formatting need to be removed in Year, Volume, Issues and Page ranges Bold
    When select an bold text in refernce
    Then click on unbold button
    Then click Corrected button

  Scenario: Check and correct,Incorrect format 'bold' is present.
    When check the alert message of incorrect format bold is present
    Then Check and click Corrected button below

  Scenario: Verify Formatting need to be removed in Year, Volume, Issues and Page ranges Italic.
    When select an italic text in refernce
    Then click on Unitalic button
    Then click the Corrected button 

  Scenario: Check Incorrect format 'italic' is present. Check and correct.
    When check the alert message of incorrect format italic is present
    Then Check and click Corrected button are below

  Scenario: Check Incorrect format 'underline' is present. Check and correct.
    When check whether underline are present in refernce
    Then change the underline into normal style
    Then click lastly corrected button 

  Scenario: Verify Incorrect format 'superscript' is present. Check and correct.
    When verify wether superscript is present or not
    Then chnge the superscript into normal style
    Then click an lastly corrected button

  Scenario: Alert message Incorrect style 'pubmedcheck1' is present. Check and correct.
    When check and verify again pubmedcheck1 are present
    Then check and verify correct button

  Scenario: Check Incorrect format 'subscript' is present. Check and correct. 
    When verify wether Subscript is present or not
    Then chnge the Subscript into normal style
    Then click an last corrected button 

  Scenario: Alert messge Incorrect style 'pubmedcheck2' is present. Check and correct.
    When check and verify again pubmedcheck2 are present
    Then check and verify corrected button

  Scenario: Verify whether the Graphical abstract missing in file are displayed properly in Step3
    Then Verify Graphical abstract missing in file
    Then Click on Corrected6 button

  Scenario: Incorrect style 'e-address' is present. Check and correct.
    When Click on ORCID in AUTHORS
    Then xref popup should be visible
    Then Unclick an superscript button and corrected

  Scenario: Verify Affiliation elements repeated twice. Please check. 
    When Affiliation text should be check and select
    Then change the nomal text to Affiliation text by affnadd
    Then check and click corrected button

  Scenario: Check and verify Incorrect style 'stl' is present. Check and correct.
    When Select incoorect style stl text
    Then Change into st style
    Then Click the text corrected button

  Scenario: Verfify Title not allowed for Keywords.error
    When place cursor on Keywords text and press Enter
    Then Select keywords letter and deselect
    Then Use keyboard action Ctrl+Space to Change text as destyle
    Then change keywords as xpara
    Then Insert Xpara
    Then click and Mark as corrected

  Scenario: Change the UI View as back
    When click on view button back
    Then click an parastylelabel back
    Then click an Inlinecolour back
    Then click an Nonprintingchar back
    Then click an coversheet back
  
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

  Scenario: Alert Incorrect style 'btl' is present. Check and correct.
    When Check alert are correct or incorrect in btl
    Then Click on Corrected button21    

  Scenario: Alert Check incorrect format bold is present
    When Check alert message of bold format is present 
    Then Click on Corrected button26  

  Scenario: Alert Check incorrect format Italic is present
    When Check alert message of italic format is present
    Then Click on Corrected button27  
  
  Scenario: Alert and verify Incorrect format 'underline' is present. Check and correct.
    When Check and verify the alert of incorrect underline present
    Then verified and click correctedF button

  Scenario: Alert and verify Incorrect format 'superscript' is present. Check and correct.
    When Check and verify the alert of incorrect superscript present
    Then verified and click correctedG button

  Scenario: Alert and verify Incorrect style 'pubmedcheck3' is present. Check and correct.
    When Check and verify the alert of incorrect pubmedcheck3 present
    Then verified and click correctedH button

  Scenario: Alert and verify Incorrect format 'subscript' is present. Check and correct.
    When Check and verify the alert of incorrect subscript present
    Then verified and click correctedI button

  Scenario: Alert and verify Incorrect style 'pubmedcheck4' is present. Check and correct.
    When Check and verify the alert of incorrect pubmedcheck4 present
    Then verified and click correctedJ button

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

  Scenario: Change URL as opsHead to skip this error
    When Xml link user able to change URL as opsHead
    Then Made an some correction in UI
    Then Click the validate button

  Scenario: User able to skip error in Step3 
    Then Users able to visible skip error option is visible
    When user can click skip error option
    Then Dropdown reason for skip error
    Then click an skip error button to update
      
  Scenario: User able to click validate to check   
    Then Click Validate btn

  Scenario: Again clear some errors in final stage
    When Verify and Click final stage of 1st error
    Then Verify and Click final stage of 2nd error
    Then Verify and Click final stage of 3rd error
    Then Verify and Click final stage of 4th error
    Then Verify and Click final stage of 5th error
    Then Verify and Click final stage of 6th error
    Then Verify and Click final stage of 7th error
    Then click VALIDATE Button


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

  #  Scenario: Check and verify user can able to convert Normal text into Math QA server
  #   When Select any text in UI
  #   Then click an format button
  #   Then Check user can able to convert text as math    

  Scenario: Check After the Enableediting mode user can able to move submitted
    When click an submit button
    Then Check and verify This article has been already submitted are present 

  Scenario: Move OUTxml are xmlcentral UAT path to testing path
    Then OUT xml are stored in XMLcentral UAT path & Moved to Testing services path to compare

  Scenario: Verify after submitted outxml are present
    When To check INxml are stored in server path are visible
    Then To check after submitted OUTxml are stored in server path

  Scenario: Verify after submitted outxml compare
    When After submitted OUTxml are compare with INxml
    Then Delete OUTxml in Testing path after all verified






                    



 
    

  

