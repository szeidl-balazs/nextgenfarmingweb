import React from 'react';
import NestedListComponent from './5_3_Nested_list_component';

const NestedListContent = () => {

    return (
        <div>

            <NestedListComponent            
                list1="Tenisz: láberő fejlesztés, robbanékonyság fokozás."
                list2="Labdarúgás: felugrás fejelésekhez és a megindulásokhoz az elrugaszkodás fejlesztése."
                list3="Kézilabda: felugrás átlövésekhet és a megindulásokhoz az elrugaszkodás fejlesztése."
                list4="Kosárlabda: felugrás dobásokhoz és a megindulásokhoz az elrugaszkodás fejlesztése."
                list5="Atlétika: elrugaszkodások fejlesztése ugrásokhoz, futószámokban a rajtok fejlesztése."
                list6="Vízilabda: kitaposás fejlesztése."
                list7="Síugrás: elrugaszkodás fejlesztése."
                list8="Evezés: kar, váll, hátizomzat fejlesztése."
                list9="stb"
            />

        </div>
    )
}

export default NestedListContent;