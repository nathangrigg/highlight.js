/*
Language: Gnuplot
*/

function(hljs) {
  return {
    defaultMode: {
      keywords: {
        keyword:
          'cd call clear exit fit if help history load pause plot print' +
          'pwd quit replot reread reset save set shell show splot system' +
          'test unset update all using index every at by from to with',
        math:
          'abs acos arg asin atan besj0 besj1 besy0 besy1 ceil cos cosh erf' +
          'erfc exp floor gamma ibeta igamma igam int lgamma log log10 rand' +
          'real rgn sin sinh sqrt tan tanh',
        params:
          'angles arrow autoscale bars boxwidth clabel clip cntrparam colorbox ' +
          'contour decimalsign dgrid3d dummy encoding fit format grid ' +
          'historysize isosamples key locale logscale mapping mouse multiplot ' +
          'offsets origin output palette parametric pm3d polar print samples ' +
          'style surface terminal ticscale ticslevel timestamp timefmt title ' +
          'view zero zeroaxis label tics margin ' +
          'xrange yrange zrange x2range y2range z2range ' +
          'xdata ydata zdata x2data y2data z2data ' +
          'xlabel ylabel zlabel x2label y2label z2label ' +
          'xzeroaxis yzeroaxis zzeroaxis x2zeroaxis y2zeroaxis z2zeroaxis ' +
          'rrange trange urange vrange ' +
          'bmargin lmargin rmargin tmargin ' +
          'cbtics mcbtics nocbtics nomcbtics ' +
          'xtics mxtics dxtics noxtics nomxtics nodxtics ytics mytics ' +
          'dytics noytics nomytics nodytics ztics mztics dztics noztics ' +
          'nomztics nodztics x2tics mx2tics dx2tics nox2tics nomx2tics ' +
          'nodx2tics y2tics my2tics dy2tics noy2tics nomy2tics nody2tics ' +
          'z2tics mz2tics dz2tics noz2tics nomz2tics nodz2tics ' +
          'cblabel cbrange cbdata cbdtics cbmtics' +
          'pi degrees radians default restore user left right center top ' +
          'bottom outside below Left Right front back layerdefault tiny ' +
          'small medium large giant size absolute relative vertical ' +
          'horizontal min max fixmin fixmax fix keepfix on off begin ' +
          'end in out push pop zero one two empty solid pattern linear ' +
          'cubicspline bspline bdefault base both iso_8859_1 iso_8859_2 ' +
          'iso_8859_15 cp850 cp852 cp437 koi8r cartesian spherical ' +
          'cylindrical gray color positive negative fill line linestyle ls ' +
          'linetype lt linewidth lw pointtype pt pointsize ps textcolor tc ' +
          'xy xz yz xyz clipboardformat mouseformat trianglepattern ' +
          'labeloptions heads arrowstyle as rto boxes filledcurves ' +
          'financebars candlesticks boxerrorbars boxxyerrorbars xerrorbars ' +
          'xerrorlines xyerrorbars xyerrorlines yerrorbars yerrorlines dots ' +
          'fsteps histeps impulses lines linespoints steps points vectors ' +
          'binary matrix axis autofreq loadpath fontpath logfile datafile ' +
          'file scansautomatic scansbackward scansforward separator ' +
          'corners2color mean median geomean clip1in clip4in c1 c2 c3 c4 ' +
          'flush implicit explicit order auto levels discrete incremental ' +
          'closed commentschars data defined font function functions height ' +
          'width map maxcolors missing model rgbformulae samplen spacing' +
          'border noborder labels nolabels autotitles noautotitles filled ' +
          'nofilled offset nooffset undefined noundefined reverse noreverse ' +
          'ratio noratio head nohead rotate norotate point nopoint box nobox ' +
          'square nosquare mirror nomirror verbose noverbose altdiagonal ' +
          'noaltdiagonal ftriangles noftriangles hidden3d nohidden3d bentover ' +
          'nobentover enhanced noenhanced doubleclick nodoubleclick ' +
          'zoomjump nozoomjump zoomcoordinates nozoomcoordinates ' +
          'polardistance nopolardistance errorvariables noerrorvariables ' +
          'ps_allcF nops_allcF writeback nowriteback'
      },
      contains: [
        hljs.QUOTE_STRING_MODE,
        hljs.inherit(hljs.APOS_STRING_MODE, {contains: []}),
        hljs.HASH_COMMENT_MODE,
        hljs.C_NUMBER_MODE,
      ]
    }
  };
}
