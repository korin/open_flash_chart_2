/**
 *  Author: Saúl Martínez Vidals
 *  http://buglog-saul.blogspot.com/
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, version 3 of the License.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Changes by Fred Wu:
 *
 * [2008-06-28]
 * + added 'GetKeywords_without' to the shCore.js file to fix Bash keywords and variables conflict
 *
 * Changes by Lisowski Rafał:
 *
 * [2008-07-21]
 * + added exclude keywords and normal style
 */
dp.sh.Brushes.Bash = function()
{
    var builtins =  'alias bg bind break builtin cd command compgen complete continue ' +
                    'declare dirs disown echo enable eval exec exit export fc fg ' +
                    'getopts hash help history jobs kill let local logout popd printf ' +
                    'pushd pwd read readonly return set shift shopt source ' +
                    'suspend test times trap type typeset ulimit umask unalias unset wait ' +
                    'sudo gem install git clone cp rake';

    var keywords =  'case do done elif else esac fi for function if in select then ' +
                    'haml json open_flash_chart_2:install';
                  
    var exclude =  'time until while .git git:';

    this.regexList = [
                    /* cometarios */
                    {regex: dp.sh.RegexLib.SingleLinePerlComments, css: 'comment'},
                    /* cadenas de texto */
                    {regex: dp.sh.RegexLib.DoubleQuotedString, css: 'string'},
                    {regex: dp.sh.RegexLib.SingleQuotedString, css: 'string'},
                    /* delimitadores */
                    {regex: new RegExp('[()[\\]{}]', 'g'), css: 'delim'},
                    /* variables */
                    {regex: new RegExp('\\$\\w+', 'g'), css: 'vars'},
                    {regex: new RegExp('\\w+=', 'g'), css: 'vars'},
                    /* banderas */
                    {regex: new RegExp('\\s-\\w+', 'g'), css: 'flag'},
                    /* builtins */
                    {regex: new RegExp(this.GetKeywords(builtins), 'gm'), css: 'builtin'},
                    {regex: new RegExp(this.GetKeywords(keywords), 'gm'), css: 'keyword'},
                    {regex: new RegExp(this.GetKeywords(exclude), 'gm'), css: 'normal'}
                    /* palabras reservadas */
                    /*{regex: new RegExp(this.GetKeywords_without(keywords, '='), 'gm'), css: 'keyword'}*/
                    ];

    this.CssClass = 'dp-bash';

    this.Style =    '.dp-bash .builtin {color: maroon; font-weight: bold;}' +
                    '.dp-bash .comment {color: gray;}' +
                    '.dp-bash .delim {font-weight: bold;}' +
                    '.dp-bash .flag {color: green;}' +
                    '.dp-bash .string {color: red;}' +
                    '.dp-bash .vars {color: blue;}' +
                    '.dp-bash .normal';

}

dp.sh.Brushes.Bash.prototype = new dp.sh.Highlighter();
dp.sh.Brushes.Bash.Aliases = ['bash', 'sh'];
