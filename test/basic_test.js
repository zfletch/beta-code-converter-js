(function () {
'use strict';

var gr_form;
var bt_form;
var bt_form1;
var bt_form2;

gr_form = "μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος";
bt_form = 'mh=nin a)/eide qea\\ *phlhi+a/dew *)axilh=os';

Assert.equal(Converter.grToBt(gr_form), bt_form, "(basic) gr -> bt");
Assert.equal(Converter.btToGr(bt_form), gr_form, "(basic) bt -> gr");

gr_form = 'κατέβην χθὲς εἰς Πειραιᾶ μετὰ Γλαύκωνος τοῦ Ἀρίστωνος προσευξόμενός τε τῇ θεῷ καὶ ἅμα τὴν ἑορτὴν βουλόμενος θεάσασθαι τίνα τρόπον ποιήσουσιν ἅτε νῦν πρῶτον ἄγοντες. καλὴ μὲν οὖν μοι καὶ ἡ τῶν ἐπιχωρίων πομπὴ ἔδοξεν εἶναι, οὐ μέντοι ἧττον ἐφαίνετο πρέπειν ἣν οἱ Θρᾷκες ἔπεμπον. προσευξάμενοι δὲ καὶ θεωρήσαντες ἀπῇμεν πρὸς τὸ ἄστυ. κατιδὼν οὖν πόρρωθεν ἡμᾶς οἴκαδε ὡρμημένους Πολέμαρχος ὁ Κεφάλου ἐκέλευσε δραμόντα τὸν παῖδα περιμεῖναί ἑ κελεῦσαι. καί μου ὄπισθεν ὁ παῖς λαβόμενος τοῦ ἱματίου, κελεύει ὑμᾶς, ἔφη, Πολέμαρχος περιμεῖναι. καὶ ἐγὼ μετεστράφην τε καὶ ἠρόμην ὅπου αὐτὸς εἴη. οὗτος, ἔφη, ὄπισθεν προσέρχεται· ἀλλὰ περιμένετε. ἀλλὰ περιμενοῦμεν, ἦ δ\' ὃς ὁ Γλαύκων.';
bt_form = 'kate/bhn xqe\\s ei)s *peiraia= meta\\ *glau/kwnos tou= *)ari/stwnos proseuco/meno/s te th=| qew=| kai\\ a(/ma th\\n e(orth\\n boulo/menos qea/sasqai ti/na tro/pon poih/sousin a(/te nu=n prw=ton a)/gontes. kalh\\ me\\n ou)=n moi kai\\ h( tw=n e)pixwri/wn pomph\\ e)/docen ei)=nai, ou) me/ntoi h(=tton e)fai/neto pre/pein h(\\n oi( *qra=|kes e)/pempon. proseuca/menoi de\\ kai\\ qewrh/santes a)ph=|men pro\\s to\\ a)/stu. katidw\\n ou)=n po/rrwqen h(ma=s oi)/kade w(rmhme/nous *pole/marxos o( *kefa/lou e)ke/leuse dramo/nta to\\n pai=da perimei=nai/ e( keleu=sai. kai/ mou o)/pisqen o( pai=s labo/menos tou= i(mati/ou, keleu/ei u(ma=s, e)/fh, *pole/marxos perimei=nai. kai\\ e)gw\\ metestra/fhn te kai\\ h)ro/mhn o(/pou au)to\\s ei)/h. ou(=tos, e)/fh, o)/pisqen prose/rxetai: a)lla\\ perime/nete. a)lla\\ perimenou=men, h)= d\' o(\\s o( *glau/kwn.';

Assert.equal(Converter.grToBt(gr_form), bt_form, " (long) gr -> bt");
Assert.equal(Converter.btToGr(bt_form), gr_form, " (long) bt -> gr");

gr_form = 'δδΔς'
bt_form1 = 'dd*ds'
bt_form2 = 'dD*Ds2'

Assert.equal(Converter.grToBt(gr_form), bt_form1, " (weird letters) gr  -> bt");
Assert.equal(Converter.btToGr(bt_form1), gr_form, " (weird letters) bt  -> gr");
Assert.equal(Converter.btToGr(bt_form2), gr_form, " (weird letters) bt2 -> gr");

}());
