var registro             = 0;
var $_getValidationField = document.getElementsByClassName('validation-text');

getTitleInput = document.getElementById('c-nombre');

getTitleInput.addEventListener('input', function() {

    getTitleInputValue = this.value;

    if (getTitleInputValue == "") {
        $_getValidationField[0].innerHTML       = 'Nombre Requerido';
        $_getValidationField[0].style.display   = 'block';
    } else {
        $_getValidationField[0].style.display   = 'none';
    }
})

$("#btn-show-modal").click(function() {

    var $_getValidationField    = document.getElementsByClassName('validation-text');

    $('#c-nombre').val('');
    $_getValidationField[0].style.display = 'none';

    $('#inlineForm').modal('show');
    $('#btn-add').css('display','block');
    $('#btn-edit').css('display','none');
   
}); 

$("#btn-add").click(function() {
    var $_getValidationField    = document.getElementsByClassName('validation-text');
    var getParent               = $(this).parents('.modal-content');
    var $_title                 = getParent.find('#c-nombre');
    var $_description           = getParent.find('#c-description');
    var $_titleValue            = $_title.val();
    var $_descriptionValue      = $_description.val();

    if ($_titleValue == "") {
        $_getValidationField[0].innerHTML     = 'Debe completar este campo';
        $_getValidationField[0].style.display = 'block';
    } else {
        $_getValidationField[0].style.display = 'none';
    }

    if ($_titleValue == "") {
        return false;
    }else{
        AddModule($_titleValue,$_descriptionValue);

    }
}); 

function AddModule(title,description){
    $.ajax({
        type: 'POST',
        url: '/categoria/create',
        data: { 
            title: title,
            description: description
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },   
        success: function(data) {
            if (data.type == 'success'){
    
                $('#inlineForm').modal('hide');

                msg_type('success','Creación Exitosa','');

                setTimeout(function(){ location.reload(); }, 2000);
    
            }else if(data.type == 'error'){ 
                msg_type('error','Error, intente nuevamente','');
            }
        }   
    }); 
}

$('body').on('click', '#items a', function(){
    var id      = $(this).data("id");
    var tipo    = $(this).attr('id');
    // editar
    if (tipo == 1) {
        editar(id);
    }else if(tipo == 2){ // Anular
        anular(id);
    }else if(tipo == 3){ // Activar
        activar(id);
    }else if(tipo == 4){
        eliminar(id);
    }
})

function editar(id){
    $('#btn-add').css('display','none');
    $('#btn-edit').css('display','block');

    $('#inlineForm').modal('show');

    var title        = $('#text-nombre-'+id).text();
    registro         = id;  
   
    $('#c-nombre').val(title);
    $('#c-id').val(id);

}

$("#btn-edit").click(function() {
    
    var $_getValidationField    = document.getElementsByClassName('validation-text');
    var getParent               = $(this).parents('.modal-content');
    var $_title                 = getParent.find('#c-nombre');
    var $_description           = getParent.find('#c-description');
    var $_titleValue            = $_title.val();
    var $_descriptionValue      = $_description.val();

    if ($_titleValue == "") {
        $_getValidationField[0].innerHTML     = 'Debe completar este campo';
        $_getValidationField[0].style.display = 'block';
    } else {
        $_getValidationField[0].style.display = 'none';
    }


    if ($_titleValue == "") {
        return false;
    }else{
        EditModule(registro,$_titleValue,$_descriptionValue);
    }
        
}); 

function EditModule(id,title,description){
    $.ajax({
        type: 'PUT',
        url: '/categoria/update/'+id,
        data: { id: id, title: title, description: description },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },   
        success: function(data) {
            if (data.type == 'success'){
    
                $('#btn-add').css('display','block');
                $('#btn-edit').css('display','none');
                $('#inlineForm').modal('hide');

                autClose(data.title,2000);

                setTimeout(function(){ location.reload(); }, 2000);
    
            }else if(data.type == 'error'){ 
                msg_type(data.type,data.title,'');
            }
        }   
    }); 
}

function eliminar(id) {
    Swal.fire({
        title: 'Quiere eliminar este registro?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!',
        confirmButtonClass: 'btn btn-warning',
        cancelButtonText: 'Cancelar',
        cancelButtonClass: 'btn btn-danger ml-1',
        buttonsStyling: false,
        allowOutsideClick: function () {
            !Swal.isLoading()
        },
    }).then(function (result) {
        if (result.value) {
            $.ajax({
                type: 'GET',
                url: '/categoria/delete/'+id,
                data: $(this).serialize(),
                success: function(data) {
                    if (data.type == 'success'){
                        
                        autClose(data.title);
                        setTimeout(function(){ location.reload(); }, 1500);
                        
                    }else if(data.type == 'error'){ 
                        msg_type(data.type,data.title,'');
                    }
                }   
            });
            
        }
        else if (result.dismiss === Swal.DismissReason.cancel) {
            msg_type('success','Tu registro imaginario ha sido salvado','');
        }
    })
}
 
function activar(id){

    Swal.fire({
        title: 'Activar Registro?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, activar!',
        confirmButtonClass: 'btn btn-warning',
        cancelButtonText: 'Cancelar',
        cancelButtonClass: 'btn btn-info ml-1',
        buttonsStyling: false,
        allowOutsideClick: function () {
            !Swal.isLoading()
        },
    }).then(function (result) {
        if (result.value) {
            $.ajax({
                type: 'GET',
                url: '/categoria/activar/'+id,
                data: $(this).serialize(),
                success: function(data) {
                    if (data.type == 'success'){
                        
                        autClose(data.title);
                        setTimeout(function(){ location.reload(); }, 1500);
                        
                    }else if(data.type == 'error'){ 
                        msg_type(data.type,data.title,'');
                    }
                }   
            });
            
        }
        else if (result.dismiss === Swal.DismissReason.cancel) {
            msg_type('success','Tu registro imaginario ha sido salvado','');
        }
    })
}

function anular(id){

    Swal.fire({
        title: 'Anular Registro?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, anular!',
        confirmButtonClass: 'btn btn-warning',
        cancelButtonText: 'Cancelar',
        cancelButtonClass: 'btn btn-info ml-1',
        buttonsStyling: false,
        allowOutsideClick: function () {
            !Swal.isLoading()
        },
    }).then(function (result) {
        if (result.value) {
            $.ajax({
                type: 'GET',
                url: '/categoria/anular/'+id,
                data: $(this).serialize(),
                success: function(data) {
                    if (data.type == 'success'){
                        
                        autClose(data.title);
                        setTimeout(function(){ location.reload(); }, 1500);
                        
                    }else if(data.type == 'error'){ 
                        msg_type(data.type,data.title,'');
                    }
                }   
            });
            
        }
        else if (result.dismiss === Swal.DismissReason.cancel) {
            msg_type('success','Tu registro imaginario ha sido salvado','');
        }
    })
}