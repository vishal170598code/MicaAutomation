/// <reference types="cypress" />
import CourseGroupMaster from "../PageObjects/CourseGroupMaster"

describe("testStudentMasterBulkUpload", () => {
    before(() => {
      cy.visit("/");
    });
  
    beforeEach(() => {
      cy.Login("admin@emergingfive.com", "admin");
      cy.MasterDropdownHoverAndClick(("#course_group_master"));
    });

    it("addNewCourseGroup" , () => {
        cy.fixture("MicaCourseGroupMaster.json").then((data) => {
            const MCGM = new CourseGroupMaster();

            MCGM.clickAddButton()
            MCGM.enterCourseGroupName(data.addNewCourseGroupWIthValidData.CourseGroupName)
            MCGM.enterShortCourseGroupName(data.addNewCourseGroupWIthValidData.CourseGroupShortName)
            MCGM.clickIsCoreRadioButton()
            MCGM.clickSaveButton()
            cy.ToasterMessage()
        })
    })

    it("SearchAndDownloadExcelFile" , () => {
      cy.fixture("MicaCourseGroupMaster.json").then((data) => {
          const MCGM = new CourseGroupMaster();

          MCGM.searchRecord()
          cy.wait(3000)
          MCGM.clickExcelButton()
      })
    })

    it("SearchAndDownloadExcelFile" , () => {
      cy.fixture("MicaCourseGroupMaster.json").then((data) => {
          const MCGM = new CourseGroupMaster();

          MCGM.clickEditButton()
          MCGM.enterCourseGroupName(data.UpdateCourseGroupWIthValidData.CourseGroupName)
          MCGM.enterShortCourseGroupName(data.UpdateCourseGroupWIthValidData.CourseGroupShortName)
          MCGM.clickIsMajorRadioButton()
          MCGM.clickSaveButton()
          cy.ToasterMessage()
      })
    })

    it("ActiveAndInactiveRecord" , () => {
      cy.fixture("MicaCourseGroupMaster.json").then((data) => {
          const MCGM = new CourseGroupMaster();

          MCGM.clickEditButton()
          MCGM.clickActiveCheckBox()
          MCGM.clickSaveButton()
          cy.ToasterMessage()
          MCGM.isRecordsActiveOrInactive()
      })
    })

    it("DeleteRecord" , () => {
      cy.fixture("MicaCourseGroupMaster.json").then((data) => {
          const MCGM = new CourseGroupMaster();

          MCGM.inputInSearchBar(data.DeleteRecordSearch.filterRecords)
          MCGM.clickDeleteButton()
          MCGM.clickConfirmDeleteButton()
          cy.ToasterMessage()
          MCGM.getTestinGrid()
      })
    })

    it.only("GetAllRecords" , () => {
      cy.fixture("MicaCourseGroupMaster.json").then((data) => {
          const MCGM = new CourseGroupMaster();
          let Records = MCGM.getAllRecords()
          console.table(Records)
      })
    })
})