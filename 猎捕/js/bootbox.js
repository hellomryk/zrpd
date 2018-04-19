;(function($, window, document,undefined) {
        //��̬��������
        var bootBox = {
            init: function (opt) {
                var defaults = {
                    backdrop: true,//�Ƿ���ʾ���ϣ���ԭ��bootstrap ģ̬��һ��
                    keyboard: true,//�Ƿ���esc���˳�����ԭ��bootstrap ģ̬��һ��
                    url: '',
                    content:'',
                    type :'',
                    header:false,
                    footer:false,
                    size:'',
                    height:0
                };

            var opts = $.extend({}, defaults, opt);
            var guid =  +new Date();
            //��̬���봰��
            var temp = '<div class="modal fade" id="myModal'+guid+'" tabindex="-1" role="dialog"  aria-hidden="true"><div class="modal-dialog '+opts.size+'"><div class="modal-content "  id="myContent'+guid+'">';
            if (opts.header){ // ����ûʵ��
                temp+='<div class="modal-header" style="border-bottom: 0; padding-bottom: 0;"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button></div>';
            }
            temp+='<div class="modal-body" style="overflow: auto; "></div>';
            if (opts.type == 'confirm' ){
                temp +='<div class="modal-footer" style="text-align: center;border-top:0"><button type="button" class="btn btn-default"  data-dismiss="modal">�ر�</button><button type="button" class="btn btn-primary ok" style="margin-left: 30px">ȷ��</button>';
            }
            temp +='</div></div></div>';
            $("body").append(temp);

                var modal = $("#myModal" + guid);

                modal.modal({
                    backdrop: opts.backdrop,
                    keyboard: opts.keyboard
                });

            modal.find(".modal-body").html(opts.content).css({'max-height':document.documentElement.clientHeight-120});
            // modal.css({'top':(window.screen.height-modal.find(".modal-dialog").height())/2});
            if (opts.url){
                modal.find(".modal-body").load(opts.url);
            }

            modal
            //��ʾ����

            //���ش��ں�ɾ������html
                .on('hidden.bs.modal', function () {
                    modal.remove();
                    modal.find(".modal-backdrop").remove();
                    if (opts.closeEvent) {
                        eval(opts.closeEvent);
                    }
                })
                //������ʾ��
                .on('shown.bs.modal', function () {

                    if (opts.openEvent) {
                        eval(opts.openEvent);
                    }
                }).on('show.bs.modal',function () {
                // alert($(".modal-content").height());
                // if (opts.type=="confirm"){
                //     modal.find(".modal-dialog").css({'margin-top':(document.documentElement.clientHeight-$(".modal-content").height())/2});
                // }
                // $("#myContent" + guid).removeClass("hide");
                // modal.find(".modal-dialog").css({'margin-top':(window.screen.height-modal.find(".modal-dialog").height())/2});
            }).modal('show');
            //�󶨰�ť�¼�
            modal.find(".ok").click(function () {
                if (opts.okEvent) {
                    var ret = eval(opts.okEvent);
                    if (ret) {
                        modal.modal('hide');
                    }
                }
            });
        },
        confirm:function (opt) {
            opt.type = 'confirm';
            this.init(opt);
        },
        remote : function (opt) {
            opt.header = true;
            this.init(opt);
        },
        alert:function (opt) {
            this.init(opt);
        }
    };
    window.bootBox = bootBox;
})(jQuery, window, document);