//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader// 

//start contact form validation
class ContacFormValidation {
    validation(formData) {
        let visualFeedBackText;
        $(formData.submit).on(formData.eventName, () => {
            const nameCondition = $(formData.name).val().length < 5;
            const numData = +$(formData.number).val();
            // name filed
            if (nameCondition) {
                visualFeedBackText = 'please enter your valid name';
                $(formData.visualFeedBack).addClass(formData.clsName);
                $(formData.visualFeedBack).html(visualFeedBackText);
                return false;
            }
            // subject filed
            if ($(formData.subject).val().length < 10) {
                visualFeedBackText = 'please enter your correct subject';
                $(formData.visualFeedBack).addClass(formData.clsName);
                $(formData.visualFeedBack).html(visualFeedBackText);
                return false;
            }
            // number filed
            if (isNaN(numData) || $(formData.number).val().length !== 10) {
                visualFeedBackText = 'please enter your valid number';
                $(formData.visualFeedBack).addClass(formData.clsName);
                $(formData.visualFeedBack).html(visualFeedBackText);
                return false;
            }
            // email filed
            if ($(formData.email).val().indexOf('@') === -1 || $(formData.email).val().length < 6) {
                visualFeedBackText = 'please enter your valid email';
                $(formData.visualFeedBack).addClass(formData.clsName);
                $(formData.visualFeedBack).html(visualFeedBackText);
                return false;
            }
            // message filed
            if ($(formData.message).val().length <= 140) {
                visualFeedBackText = 'please enter more than 140 characters';
                $(formData.visualFeedBack).addClass(formData.clsName);
                $(formData.visualFeedBack).html(visualFeedBackText);
                return false;
            }
            // all are fileds successfully
            else {
                $(formData.visualFeedBack).removeClass(formData.clsName);
                $(formData.visualFeedBack).html('');
                swal({
                    title: "Good job!",
                    text: "your data is submitted!",
                    icon: "success",
                    button: "ok",
                });
            }


        });
    }
}
//end contact form validation


// dom content is loading  here
$(() => {
    const contactCls = new ContacFormValidation;
    contactCls.validation({
        name: '#name',
        subject: '#subject',
        number: '#number',
        email: '#email',
        message: '#message',
        submit: '#submit',
        visualFeedBack: '.visualFeedBack',
        eventName: 'click',
        clsName: 'visible'
    });
});