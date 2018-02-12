(function() {
'use strict';

var expect = require('chai').expect;
var bc = require('../index');

describe('#greekToBetaCode', function() {
  it('should say hello world', function() {
    var greek = 'χαῖρε ὦ κόσμε';
    var beta_code = 'xai=re w)= ko/sme';

    expect(bc.greekToBetaCode(greek)).to.equal(beta_code);
  });

  it('should convert the first line of the Iliad', function() {
    var greek = "μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος";
    var beta_code = 'mh=nin a)/eide qea\\ *phlhi+a/dew *)axilh=os';

    expect(bc.greekToBetaCode(greek)).to.equal(beta_code);
  });

  it('should convert a longer piece of text', function() {
    var greek = 'κατέβην χθὲς εἰς Πειραιᾶ μετὰ Γλαύκωνος τοῦ Ἀρίστωνος προσευξόμενός τε τῇ θεῷ καὶ ἅμα τὴν ἑορτὴν βουλόμενος θεάσασθαι τίνα τρόπον ποιήσουσιν ἅτε νῦν πρῶτον ἄγοντες. καλὴ μὲν οὖν μοι καὶ ἡ τῶν ἐπιχωρίων πομπὴ ἔδοξεν εἶναι, οὐ μέντοι ἧττον ἐφαίνετο πρέπειν ἣν οἱ Θρᾷκες ἔπεμπον. προσευξάμενοι δὲ καὶ θεωρήσαντες ἀπῇμεν πρὸς τὸ ἄστυ. κατιδὼν οὖν πόρρωθεν ἡμᾶς οἴκαδε ὡρμημένους Πολέμαρχος ὁ Κεφάλου ἐκέλευσε δραμόντα τὸν παῖδα περιμεῖναί ἑ κελεῦσαι. καί μου ὄπισθεν ὁ παῖς λαβόμενος τοῦ ἱματίου, κελεύει ὑμᾶς, ἔφη, Πολέμαρχος περιμεῖναι. καὶ ἐγὼ μετεστράφην τε καὶ ἠρόμην ὅπου αὐτὸς εἴη. οὗτος, ἔφη, ὄπισθεν προσέρχεται· ἀλλὰ περιμένετε. ἀλλὰ περιμενοῦμεν, ἦ δ\' ὃς ὁ Γλαύκων.';
    var beta_code = 'kate/bhn xqe\\s ei)s *peiraia= meta\\ *glau/kwnos tou= *)ari/stwnos proseuco/meno/s te th=| qew=| kai\\ a(/ma th\\n e(orth\\n boulo/menos qea/sasqai ti/na tro/pon poih/sousin a(/te nu=n prw=ton a)/gontes. kalh\\ me\\n ou)=n moi kai\\ h( tw=n e)pixwri/wn pomph\\ e)/docen ei)=nai, ou) me/ntoi h(=tton e)fai/neto pre/pein h(\\n oi( *qra=|kes e)/pempon. proseuca/menoi de\\ kai\\ qewrh/santes a)ph=|men pro\\s to\\ a)/stu. katidw\\n ou)=n po/rrwqen h(ma=s oi)/kade w(rmhme/nous *pole/marxos o( *kefa/lou e)ke/leuse dramo/nta to\\n pai=da perimei=nai/ e( keleu=sai. kai/ mou o)/pisqen o( pai=s labo/menos tou= i(mati/ou, keleu/ei u(ma=s, e)/fh, *pole/marxos perimei=nai. kai\\ e)gw\\ metestra/fhn te kai\\ h)ro/mhn o(/pou au)to\\s ei)/h. ou(=tos, e)/fh, o)/pisqen prose/rxetai: a)lla\\ perime/nete. a)lla\\ perimenou=men, h)= d\' o(\\s o( *glau/kwn.';

    expect(bc.greekToBetaCode(greek)).to.equal(beta_code);
  });

  it('should convert random characters', function() {
    var greek = 'δδΔς';
    var beta_code = 'dd*ds';

    expect(bc.greekToBetaCode(greek)).to.equal(beta_code);
  });

  it('should normalize the Unicode', function () {
    var greek = 'Πολλὴ μὲν ἐν βροτοῖσι κοὐκ ἀνώνυμος θεὰ κέκλημαι Κύπρις οὐρανοῦ τ᾿ ἔσω·';
    var beta_code = '*pollh\\ me\\n e)n brotoi=si kou)k a)nw/numos qea\\ ke/klhmai *ku/pris ou)ranou= t᾿ e)/sw:';

    expect(bc.greekToBetaCode(greek)).to.equal(beta_code);
  });
});

describe('#betaCodeToGreek', function() {
  it('should say hello world', function() {
    var greek = 'χαῖρε ὦ κόσμε';
    var beta_code = 'xai=re w)= ko/sme';

    expect(bc.betaCodeToGreek(beta_code)).to.equal(greek);
  });

  it('should convert the first line of the Iliad', function() {
    var greek = "μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος";
    var beta_code = 'mh=nin a)/eide qea\\ *phlhi+a/dew *)axilh=os';

    expect(bc.betaCodeToGreek(beta_code)).to.equal(greek);
  });

  it('should convert a longer piece of text', function() {
    var greek = 'κατέβην χθὲς εἰς Πειραιᾶ μετὰ Γλαύκωνος τοῦ Ἀρίστωνος προσευξόμενός τε τῇ θεῷ καὶ ἅμα τὴν ἑορτὴν βουλόμενος θεάσασθαι τίνα τρόπον ποιήσουσιν ἅτε νῦν πρῶτον ἄγοντες. καλὴ μὲν οὖν μοι καὶ ἡ τῶν ἐπιχωρίων πομπὴ ἔδοξεν εἶναι, οὐ μέντοι ἧττον ἐφαίνετο πρέπειν ἣν οἱ Θρᾷκες ἔπεμπον. προσευξάμενοι δὲ καὶ θεωρήσαντες ἀπῇμεν πρὸς τὸ ἄστυ. κατιδὼν οὖν πόρρωθεν ἡμᾶς οἴκαδε ὡρμημένους Πολέμαρχος ὁ Κεφάλου ἐκέλευσε δραμόντα τὸν παῖδα περιμεῖναί ἑ κελεῦσαι. καί μου ὄπισθεν ὁ παῖς λαβόμενος τοῦ ἱματίου, κελεύει ὑμᾶς, ἔφη, Πολέμαρχος περιμεῖναι. καὶ ἐγὼ μετεστράφην τε καὶ ἠρόμην ὅπου αὐτὸς εἴη. οὗτος, ἔφη, ὄπισθεν προσέρχεται· ἀλλὰ περιμένετε. ἀλλὰ περιμενοῦμεν, ἦ δ\' ὃς ὁ Γλαύκων.';
    var beta_code = 'kate/bhn xqe\\s ei)s *peiraia= meta\\ *glau/kwnos tou= *)ari/stwnos proseuco/meno/s te th=| qew=| kai\\ a(/ma th\\n e(orth\\n boulo/menos qea/sasqai ti/na tro/pon poih/sousin a(/te nu=n prw=ton a)/gontes. kalh\\ me\\n ou)=n moi kai\\ h( tw=n e)pixwri/wn pomph\\ e)/docen ei)=nai, ou) me/ntoi h(=tton e)fai/neto pre/pein h(\\n oi( *qra=|kes e)/pempon. proseuca/menoi de\\ kai\\ qewrh/santes a)ph=|men pro\\s to\\ a)/stu. katidw\\n ou)=n po/rrwqen h(ma=s oi)/kade w(rmhme/nous *pole/marxos o( *kefa/lou e)ke/leuse dramo/nta to\\n pai=da perimei=nai/ e( keleu=sai. kai/ mou o)/pisqen o( pai=s labo/menos tou= i(mati/ou, keleu/ei u(ma=s, e)/fh, *pole/marxos perimei=nai. kai\\ e)gw\\ metestra/fhn te kai\\ h)ro/mhn o(/pou au)to\\s ei)/h. ou(=tos, e)/fh, o)/pisqen prose/rxetai: a)lla\\ perime/nete. a)lla\\ perimenou=men, h)= d\' o(\\s o( *glau/kwn.';

    expect(bc.betaCodeToGreek(beta_code)).to.equal(greek);
  });

  it('should convert random characters', function() {
    var greek = 'δδΔς';
    var beta_code1 = 'dd*ds';
    var beta_code2 = 'dD*Ds2';

    expect(bc.betaCodeToGreek(beta_code1)).to.equal(greek);
    expect(bc.betaCodeToGreek(beta_code2)).to.equal(greek);
  });
});
})();
