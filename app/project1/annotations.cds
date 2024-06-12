using studentService as service from '../../srv/studentService';
annotate service.student with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'age',
                Value : age,
            },
            {
                $Type : 'UI.DataField',
                Label : 'branch',
                Value : branch,
            },
            {
                $Type : 'UI.DataField',
                Label : 'city',
                Value : city,
            },
            {
                $Type : 'UI.DataField',
                Label : 'dept_id',
                Value : dept_id,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'age',
            Value : age,
        },
        {
            $Type : 'UI.DataField',
            Label : 'branch',
            Value : branch,
        },
        {
            $Type : 'UI.DataField',
            Label : 'city',
            Value : city,
        },
    ],
);

annotate service.student with {
    dept @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'Dept',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : dept_id,
                ValueListProperty : 'id',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'subject',
            },
        ],
    }
};

