//头部模板
define("PersonButtom", jsconfig.baseArr, function (Vue, $, common) {
    var html = `
        <div class ="ddgl">
                        <h1>账户安全</h1>
                        <div class ="personal_center m10">
                        账户安全:
                            <strong class ="ml10 security_level_40">低<i class ="ml10"><em></em></i></strong><span class="ml10 yellow">建议您尽快启动全部安全设置,以保障您的账号及资金安全.</span>
                        </div>
                         <table width="100%" border="0" cellspacing="1" cellpadding="0" class ="security_type">
                        <tbody>
                            <tr>
                                <th>项目名称</th>
                                <th>说明</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td>登录密码</td>
                                <td>英文加数字或符号的组合密码，安全性更高，建议您定期更换密码。</td>
                                <td><a href="http://www.7881.com/user/toChangePassword.action" class ="blue_2">修改</a></td>
                            </tr>
                            <tr>
                                <td>支付密码</td>
                                <td>账户充值后使用余额时需要使用支付密码，确保账号资金安全。</td>
                                <td><a href="http://www.7881.com/commerical/toChangetransactionPass.action" class ="blue_2">设置</a></td>
                            </tr>
                            <tr>
                                <td>手机绑定</td>
                                <td>账户有资金相关操作时，将向您的手机免费发送验证码及重要操作提示。</td>
                                <td><a class ="blue_2" href="http://www.7881.com/commerical/toEditPhone.action">设置</a></td>
                            </tr>
                            <tr>
                                <td>实名认证</td>
                                <td>设置您的身份证信息和银行卡信息，设置完成后，账户更安全。</td>
                                <td>
                                    <a href="http://www.7881.com/commerical/toApprove.action" class ="blue_2">验证</a>
                                </td>
                            </tr>


                            <tr>
                                <td>登录验证</td>
                                <td>登录验证用于登录时进行二次验证，确保账号资金安全</td>
                                <td><a class ="blue_2" href="http://www.7881.com/commerical/toFindSafelogin.action">设置</a></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                   
        `
    var components = {
        template: html


    };

    return components;
});