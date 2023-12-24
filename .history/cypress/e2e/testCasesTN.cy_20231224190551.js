import testDataGenerator from "../pageobjects/testDataGenerator"

describe('Test Cases Telefoon nummers', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://d2r3v7evrrggno.cloudfront.net/');
   })
  
    it('[Telefoon nummers] Verify Dropdown Menu is visible after clicking', () => {
      const testDataGeneratorObj = new testDataGenerator();
      testDataGeneratorObj.telefoonNummersDropdownClick();
      testDataGeneratorObj.elements.telefoonNummersDropdown().should('have.attr', 'aria-expanded', 'true');
    })
  
    it('[Telefoon nummers] Verify more info is shown when "More Info" is clicked', () => {
      const testDataGeneratorObj = new testDataGenerator();
      testDataGeneratorObj.telefoonNummersDropdownClick();
      testDataGeneratorObj.telephoneMoreInfoButtonClick();
      testDataGeneratorObj.telephoneCollapse.should('be.visible');
    })
  
    it('[Telefoon nummers] Verify text more info contains "While it is difficult to find accurate information about the structure"', () =>{
      const testDataGeneratorObj = new testDataGenerator();
      testDataGeneratorObj.telefoonNummersDropdownClick();
      testDataGeneratorObj.telephoneMoreInfoButtonClick();
      testDataGeneratorObj.telephoneMoreInfoText.should('include', 'While it is difficult to find accurate information about the structure');
    })

    it('[Telefoon nummers] Verify selected country returns correct area code - Default amount returns only 1 telephone number', () => {
      const testDataGeneratorObj = new testDataGenerator();

      const areaCodes = {
        'Afghanistan': '',
        'American Samoa': '',
        'Angola': '',
        'Anguilla': '',
        'Antarctica': '',
        'Antigua and Barbuda': '',
        'Argentina': '',
        'Armenia': '',
        'Aruba': '',
        'Bahamas': '',
        'Bahrain': '',
        'Barbados': '',
        'Belgium': '+32',
        'Belize': '',
        'Benin': '',
        'Bermuda': '',
        'Bolivia': '',
        'Bosnia and Herzegovina': '',
        'Brazil': '',
        'British Indian Ocean Territory': '',
        'British Virgin Islands': '',
        'Brunei': '',
        'Burkina Faso': '',
        'Burundi': '',
        'Cabo Verde': '',
        'Cambodia': '',
        'Cameroon': '',
        'Canada': '',
        'Cayman Islands': '',
        'Central African Republic': '',
        'Chad': '',
        'Christmas Island': '',
        'Cocos Islands': '',
        'Comoros': '',
        'Congo Republic': '',
        'Cook Islands': '',
        'Costa Rica': '',
        'Cote d\'Ivoire': '',
        'Czechia': '',
        'Denmark': '',
        'Djibouti': '',
        'Dominica': '',
        'Dominican Republic': '',
        'Ecuador': '',
        'Equatorial Guinea': '',
        'Eritrea': '',
        'Ethiopia': '',
        'Falkland Islands': '',
        'Faroe Islands': '',
        'Fiji': '',
        'Finland': '',
        'France': '',
        'French Guiana': '',
        'French Polynesia': '',
        'French Southern Lands': '',
        'Gambia': '',
        'Germany': '',
        'Georgia': '',
        'Gibraltar': '',
        'Greece': '',
        'Greenland': '',
        'Grenada': '',
        'Guadeloupe': '',
        'Guam': '',
        'Guatemala': '',
        'Guernsey': '',
        'Guinea': '',
        'Guinea-Bissau': '',
        'Guyana': '',
        'Haiti': '',
        'Heard Island and McDonald Islands': '',
        'Honduras': '',
        'Isle of Man': '',
        'Jamaica': '',
        'Jersey': '',
        'Kazakhstan': '',
        'Kiribati': '',
        'Kosovo': '',
        'Kyrgyzstan': '',
        'Lesotho': '',
        'Lithuania': '',
        'Macedonia': '',
        'Maldives': '',
        'Mali': '',
        'Malta': '',
        'Marshall Islands': '',
        'Martinique': '',
        'Mauritania': '',
        'Mauritius': '',
        'Mexico': '',
        'Micronesia': '',
        'Moldavia': '',
        'Montserrat': '',
        'Morocco': '',
        'New Caledonia': '',
        'Nicaragua': '',
        'Niger': '',
        'Niue': '',
        'Norfolk Island': '',
        'Northern Mariana Islands': '',
        'Palau': '',
        'Puerto Rico': '',
        'Reunion': '',
        'Romania': '',
        'Russia': '',
        'Rwanda': '',
        'Saint Barthélemy': '',
        'Saint Helena': '',
        'Saint Kitts and Nevis': '',
        'Saint Lucia': '',
        'Saint Martin': '',
        'Saint Pierre and Miquelon': '',
        'Saint Vincent and the Grenadines': '',
        'Sao Tome and Principe': '',
        'Senegal': '',
        'Seychelles': '',
        'Sierra Leone': '',
        'Sint Maarten': '',
        'Slovenia': '',
        'Solomon Islands': '',
        'South Africa': '',
        'South Georgia and the South Sandwich Islands': '',
        'South Sudan': '',
        'Spain': '',
        'Sri Lanka': '',
        'Sudan': '',
        'Svalbard and Jan Mayen': '',
        'Tajikistan': '',
        'Tanzania': '',
        'The Netherlands': '',
        'Timor-Leste': '',
        'Togo': '',
        'Tokelau': '',
        'Trinidad and Tobago': '',
        'Tunisia': '',
        'Turkey': '',
        'Turkmenistan': '',
        'Turks and Caicos Islands': '',
        'U.S. Minor Outlying Islands': '',
        'Uganda': '',
        'Ukraine': '',
        'United States': '',
        'Uzbekistan': '',
        'Venezuela': '',
        'Virgin Islands': '',
        'Wallis and Futuna': '',
        'Western Sahara': '',
        'Zambia': ''
      };

      testDataGeneratorObj.telefoonNummersDropdownClick();
      testDataGeneratorObj.telephoneNumberCountrySelect(country);
      testDataGeneratorObj.telephoneNumberGenerateButtonClick();
    })
   })