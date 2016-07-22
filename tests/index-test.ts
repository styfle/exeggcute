import * as test from 'tape';
import {exec} from '../src/index';

test('fake command should error', t => {
    t.plan(1);
    exec('fake-command', null)
        .then(out => t.error(out))
        .catch(err => t.ok(true, err.message));
});

test('fake path should error', t => {
    t.plan(1);
    exec('mkdir foo', '/fake/path')
        .then(out => t.error(out))
        .catch(err => t.ok(true, err.message));
});

test('git version should return version', t => {
    t.plan(1);
    exec('git --version', null)
        .then(out => t.ok(out.includes('git version'), out))
        .catch(err => t.fail(err.message));
});

test('git status should return status', t => {
    t.plan(1);
    exec('git status', null)
        .then(out => t.ok(true, out))
        .catch(err => t.fail(err.message));
});

